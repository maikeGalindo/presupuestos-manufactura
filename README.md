# presupuestos-manufactura

Herramienta personal para presupuestar manufactura: ventas, producción, headcount, inversiones y P&L.

## Cómo usarla
Abre `index.html` en el navegador. Los datos se guardan en el navegador (localStorage).

## Flujo de cálculo
1. **Ventas:** piezas × precio = ventas $.
2. **Producción:** piezas a producir (con meses de anticipación), materia prima estándar con % de scrap, horas estándar por subproceso, horas reales según eficiencia por subproceso y headcount operativo.
3. **Headcount** directo, indirecto y staff (ausentismo, rotación, capacitación, reclutamiento, costo total de mano de obra).
4. **P&L** con capex y opex por gerente.

## Hoja de ruta
Ver `CHANGELOG.md`. Propuestas de mejora de otras IA o colaboradores: `docs/decisiones.md`.
