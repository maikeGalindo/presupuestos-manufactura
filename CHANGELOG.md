# Changelog

## v0.8 (Monedas y producción por producto)
- Basic Input: Moneda 1 (venta/base), Moneda 2 (reporte) y Moneda 3 opcional, con sus tipos de cambio; precio de venta y material estándar se capturan en Moneda 1.
- Sales Plan: días trabajados del cliente editables; precio de venta por producto con selector de moneda de visualización; tiempo estándar de piezas vendidas totalizado o por producto.
- Production Plan: ventas, stock, plan de producción y eficiencia por producto (totales); material totalizado o por producto.
- Production by Product pasa a ser submódulo de edición: pcs/WD, eficiencia por proceso, stock inicial, material y % scrap por producto.
- Los datos de versiones anteriores se migran (stock inicial, producción manual y eficiencia se reparten por producto).

## v0.7 (Sincronización con Google Sheets)
- Nueva pestaña Sync & Versions: conexión a un Google Sheet mediante Apps Script (apps-script/Code.gs, pasos en docs/google-sheets.md).
- Autoguardado de lo capturado ("Trabajo actual"); al abrir la app carga lo más reciente.
- Versiones con nombre (por ejemplo Budget 2027, Forecast Q1): guardar, cargar y borrar; cada una crea una hoja legible "Plan - nombre".
- El almacenamiento del navegador ya no cambia de nombre entre versiones y los datos se migran en lugar de reiniciarse.

## v0.6 (Bullet 1: refinamientos)
- Basic Input sin subprocesos: los procesos se administran en Sales Plan (renglones por proceso, columnas por producto, agregar/quitar procesos).
- Production Plan con conceptos resumidos y acrónimos; HC sin decimales con nota al pie; Op. time total y eficiencia de planta (Std total ÷ Op. time total).
- Se quita el apartado de Overtime y el renglón de pcs/WD Overtime (se verá como desviación contra actuales).
- Nueva hoja "Production by Product": reporte calculado por producto, con selector.

## v0.5 (Bullet 1: ajustes de Sales Plan y Production Plan)
- Basic Input: tipo de cambio general, paros técnicos y días festivos en renglones separados, eficiencia fuera de este módulo (lista de subprocesos con agregar/quitar).
- Sales Plan: agregar, quitar y renombrar productos; tiempos estándar por pieza y proceso (editables) y tiempo estándar total de piezas vendidas.
- Production Plan: stock inicial de enero editable, "stock" en lugar de inventario, pcs/WD regular y overtime editables, eficiencia por proceso y mes editable, apartado de overtime con la misma plantilla.
- Todas las tablas mensuales con columnas alineadas.

## v0.4 (Bullet 1: Sales Plan y Production Plan)
- Todo el tiempo en minutos (tiempo estándar por pieza, tiempo disponible, headcount).
- Productos pasa a ser submódulo de Basic Input; se agregan moneda de venta y de reporte.
- Sales Plan: días trabajados netos, piezas por mes y por día, precio de venta, tipo de cambio e ingresos.
- Production Plan: requerimiento de ventas, inventario inicial/final, plan de producción con días manuales, material con scrap, plan de personal y eficiencia, y headcount por proceso.

## v0.3 (Bullet 1: ajustes)
- La herramienta se llama Budget Builder (By C.P. Miguel Angel Galindo).
- "Supuestos" ahora es Basic Input: 3 turnos con minutos, tiempos muertos, % allowance y neto disponible; calendario de 12 meses con días posibles, paros/festivos y días netos.
- Eficiencia planeada por subproceso mes a mes, con opción de agregar o quitar subprocesos.
- Horas disponibles por persona calculadas desde turnos y calendario (reemplazan el valor fijo mensual).

## v0.2 (Bullet 1: ventas y producción)
- Nuevo diseño ejecutivo para monitor de PC: menú lateral grafito, acento cyan oscuro, indicadores clave por pantalla.
- Inventario de producto terminado (inicial y cobertura objetivo en meses) en lugar de anticipación simple.
- Producción = ventas + inventario final objetivo − inventario inicial.

## v0.1
- Supuestos: horas disponibles por persona, meses de anticipación, 4 subprocesos con % de eficiencia.
- Productos: precio, materia prima estándar, scrap %, horas estándar por subproceso.
- Ventas: piezas por mes y ventas $.
- Producción: piezas a producir, materia prima con scrap, horas estándar y reales, headcount operativo por subproceso.

## Pendiente
- Bullet 2: gente y mano de obra completa (directo, indirecto, staff, ausentismo, rotación, capacitación, reclutamiento, costo).
- Bullet 3: inversiones (capex) y gasto operativo por gerente.
- Bullet 4: P&L, escenarios y vista de board.
- Por definir: inventario de materia prima.
