# 📋 Guía de Configuración del Formulario

## 🔧 Archivos de Configuración

### `config.public.js` (Archivo activo)
- **Uso**: Archivo que se carga en el navegador
- **Contenido**: Depende del modo (desarrollo o producción)

### `config.js` (Credenciales reales)
- **Uso**: Almacena las credenciales reales de Google Sheets
- **Git**: ❌ Ignorado por seguridad
- **Contenido**: API Key y Sheet ID reales

### `config.production.js` (Placeholders)
- **Uso**: Template para producción
- **Git**: ✅ Incluido
- **Contenido**: Placeholders para despliegue público

## 🚀 Comandos de Configuración

### Para Desarrollo Local
```bash
npm run config:dev
```
- Usa credenciales reales
- Permite enviar datos a Google Sheets
- Para pruebas locales

### Para Producción
```bash
npm run config:prod
```
- Usa placeholders
- Seguro para despliegue público
- Para GitHub Pages, Netlify, etc.

## 🔄 Flujo de Trabajo

1. **Desarrollo**:
   ```bash
   npm run config:dev
   npm start
   ```

2. **Antes de subir a Git**:
   ```bash
   npm run config:prod
   git add .
   git commit -m "Preparado para producción"
   ```

3. **Después de clonar**:
   ```bash
   npm install
   npm run config:dev
   npm start
   ```

## ⚠️ Importante

- **Nunca** subir `config.js` a Git
- **Siempre** usar `config:prod` antes de hacer push
- **Verificar** que `config.public.js` tenga placeholders en producción

## 🛠️ Solución de Problemas

### Error 400 en Google Sheets
- Verificar que `config.public.js` tenga credenciales reales
- Ejecutar: `npm run config:dev`

### Error de credenciales en producción
- Verificar que `config.public.js` tenga placeholders
- Ejecutar: `npm run config:prod` 