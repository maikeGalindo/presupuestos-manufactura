# Changelog

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
