/**
 * Budget Builder - respaldo y versiones en Google Sheets.
 * Pegar este código en el Google Sheet: Extensiones > Apps Script.
 * Cambia TOKEN por una clave larga y propia antes de implementar.
 */
const TOKEN = 'CAMBIA-ESTA-CLAVE-POR-UNA-LARGA';
const HOJA_DATOS = 'Datos';
const HOJA_ACTUAL = 'Actual';
const CHUNK = 40000; // una celda admite máx. 50,000 caracteres

function doGet() {
  return ContentService.createTextOutput('Budget Builder: conexión activa');
}

function doPost(e) {
  let out;
  try {
    const req = JSON.parse(e.postData.contents);
    if (req.token !== TOKEN) throw new Error('Clave incorrecta');
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try { out = manejar(req); } finally { lock.releaseLock(); }
  } catch (err) {
    out = { ok: false, error: String((err && err.message) || err) };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

function manejar(req) {
  switch (req.action) {
    case 'ping': return { ok: true };
    case 'list': return { ok: true, items: listar() };
    case 'load': return { ok: true, data: leer(req.id) };
    case 'saveDraft': {
      const fecha = guardar('draft', 'draft', 'Trabajo actual', req.data);
      exportar('Plan - Trabajo actual', req.export);
      return { ok: true, fecha: fecha };
    }
    case 'saveVersion': {
      if (!req.name) throw new Error('Falta el nombre de la versión');
      const id = 'v' + Utilities.formatDate(new Date(), 'UTC', 'yyyyMMddHHmmss');
      guardar(id, 'version', req.name, req.data);
      exportar('Plan - ' + req.name, req.export);
      return { ok: true, id: id };
    }
    case 'delete': borrar(req.id); return { ok: true };
    case 'actual': return { ok: true, values: leerActual() };
  }
  throw new Error('Acción desconocida: ' + req.action);
}

function hoja() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(HOJA_DATOS);
  if (!sh) {
    sh = ss.insertSheet(HOJA_DATOS);
    sh.appendRow(['id', 'tipo', 'nombre', 'fecha (ms)', 'json (partes)']);
    sh.getRange('C:C').setNumberFormat('@');
  }
  return sh;
}

function fila(sh, id) {
  const n = sh.getLastRow();
  if (n < 2) return 0;
  const ids = sh.getRange(2, 1, n - 1, 1).getValues();
  for (let i = 0; i < ids.length; i++) if (ids[i][0] === id) return i + 2;
  return 0;
}

function guardar(id, tipo, nombre, data) {
  const sh = hoja();
  const json = JSON.stringify(data);
  const fecha = Date.now();
  const vals = [id, tipo, String(nombre), fecha];
  for (let i = 0; i < json.length; i += CHUNK) vals.push('J' + json.substr(i, CHUNK));
  let r = fila(sh, id);
  if (!r) r = sh.getLastRow() + 1;
  if (sh.getMaxColumns() < vals.length) sh.insertColumnsAfter(sh.getMaxColumns(), vals.length - sh.getMaxColumns());
  sh.getRange(r, 1, 1, sh.getMaxColumns()).clearContent();
  sh.getRange(r, 1, 1, vals.length).setValues([vals]);
  return fecha;
}

function leer(id) {
  const sh = hoja();
  const r = fila(sh, id);
  if (!r || sh.getLastColumn() < 5) return null;
  const celdas = sh.getRange(r, 5, 1, sh.getLastColumn() - 4).getValues()[0];
  let s = '';
  celdas.forEach(function (c) { if (c !== '') s += String(c).slice(1); });
  return s ? JSON.parse(s) : null;
}

function listar() {
  const sh = hoja();
  const n = sh.getLastRow();
  if (n < 2) return [];
  return sh.getRange(2, 1, n - 1, 4).getValues().map(function (v) {
    return { id: String(v[0]), tipo: String(v[1]), nombre: String(v[2]), fecha: Number(v[3]) };
  });
}

function borrar(id) {
  if (id === 'draft') throw new Error('El trabajo actual no se puede borrar');
  const sh = hoja();
  const r = fila(sh, id);
  if (!r) return;
  const nombre = sh.getRange(r, 3).getValue();
  sh.deleteRow(r);
  const ss = SpreadsheetApp.getActive();
  const x = ss.getSheetByName(nombreHoja('Plan - ' + nombre));
  if (x) ss.deleteSheet(x);
}

function nombreHoja(n) {
  return String(n).replace(/[\[\]\*\/\\\?:]/g, '-').slice(0, 99);
}

function exportar(nombre, rows) {
  if (!rows || !rows.length) return;
  const ss = SpreadsheetApp.getActive();
  const nm = nombreHoja(nombre);
  const sh = ss.getSheetByName(nm) || ss.insertSheet(nm);
  sh.clear();
  const w = Math.max.apply(null, rows.map(function (r) { return r.length; }));
  const datos = rows.map(function (r) { const c = r.slice(); while (c.length < w) c.push(''); return c; });
  sh.getRange(1, 1, datos.length, w).setValues(datos);
  sh.getRange(1, 1, 1, w).setFontWeight('bold');
  sh.setFrozenRows(1);
}

function leerActual() {
  const sh = SpreadsheetApp.getActive().getSheetByName(HOJA_ACTUAL);
  return sh ? sh.getDataRange().getValues() : [];
}
