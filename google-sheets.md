# Conexión con Google Sheets

Guarda automáticamente lo que capturas en la app y permite guardar versiones con nombre.

## Configuración (una sola vez)
1. Crea un Google Sheet nuevo (por ejemplo, "Budget Builder Data").
2. Entra a **Extensiones > Apps Script**, borra el contenido y pega `apps-script/Code.gs`.
3. Cambia `TOKEN` por una clave larga y propia (es la contraseña de la conexión).
4. **Implementar > Nueva implementación > Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
5. Autoriza los permisos (si aparece "app no verificada": Avanzado > continuar).
6. Copia la URL de la aplicación web (termina en `/exec`).
7. En la app: **Sync & Versions**, pega la URL y la clave y toca **Conectar y sincronizar**.

## Notas
- Quien tenga la URL y la clave puede leer y escribir. Para revocar el acceso, cambia `TOKEN` y crea una nueva implementación.
- Si modificas el script, crea una nueva implementación (o actualiza la existente) para que los cambios apliquen.
- La hoja `Datos` es el respaldo interno; no la edites a mano. Las hojas `Plan - ...` son tablas legibles de cada versión.
- La hoja `Actual` se usará en el módulo de comparación plan vs actual.
