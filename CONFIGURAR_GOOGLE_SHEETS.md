# 🔧 Configuración de Google Sheets API

## 📋 **Paso a Paso para Configurar Google Sheets**

### **1. Crear Proyecto en Google Cloud Console**

1. **Ir a:** https://console.cloud.google.com/
2. **Crear nuevo proyecto** o seleccionar uno existente
3. **Activar Google Sheets API:**
   - Ir a "APIs y servicios" > "Biblioteca"
   - Buscar "Google Sheets API"
   - Hacer clic en "Habilitar"

### **2. Crear Credenciales (API Key)**

1. **Ir a:** "APIs y servicios" > "Credenciales"
2. **Hacer clic en:** "Crear credenciales" > "Clave de API"
3. **Copiar la API Key** generada
4. **Restringir la API Key** (recomendado):
   - Hacer clic en la API Key creada
   - En "Restricción de aplicación", seleccionar "Sitios web"
   - Agregar tu dominio (ej: `https://tudominio.com`)
   - En "Restricción de API", seleccionar "Google Sheets API"

### **3. Configurar el Spreadsheet**

1. **Abrir tu Google Sheet:** https://docs.google.com/spreadsheets/d/1mBN9A0nxgza0im64VTXVyqwYVQ9mpXyKWBCVZvcUN7U
2. **Hacer público el spreadsheet:**
   - Clic en "Compartir" (esquina superior derecha)
   - Cambiar a "Cualquier persona con el enlace puede ver"
   - Guardar

### **4. Actualizar el Código**

1. **Abrir:** `public/script.js`
2. **Buscar la línea:** `const GOOGLE_API_KEY = 'AIzaSyBwXKzXKzXKzXKzXKzXKzXKzXKzXKzXKzXK';`
3. **Reemplazar** con tu API Key real:
   ```javascript
   const GOOGLE_API_KEY = 'TU_API_KEY_AQUI';
   ```

### **5. Verificar Configuración**

1. **Abrir el formulario** en el navegador
2. **Llenar y enviar** un formulario de prueba
3. **Verificar** que los datos aparezcan en tu Google Sheet
4. **Revisar la consola** del navegador para errores

## 🔒 **Seguridad**

### **⚠️ Importante:**
- **Nunca compartas** tu API Key públicamente
- **Restringe la API Key** a tu dominio específico
- **Usa HTTPS** en producción
- **Monitorea el uso** en Google Cloud Console

### **🔧 Restricciones Recomendadas:**
- **Sitios web:** Solo tu dominio
- **API:** Solo Google Sheets API
- **Cuota:** Establecer límites diarios

## 🆘 **Solución de Problemas**

### **Error: "API key not valid"**
- Verificar que la API Key esté correctamente copiada
- Asegurar que Google Sheets API esté habilitada
- Revisar restricciones de dominio

### **Error: "Access denied"**
- Verificar que el spreadsheet esté público
- Comprobar permisos de acceso
- Revisar restricciones de la API Key

### **Error: "Quota exceeded"**
- Revisar límites de cuota en Google Cloud Console
- Considerar aumentar límites si es necesario

## 📊 **Monitoreo**

### **Google Cloud Console:**
- **APIs y servicios** > **Panel**
- **Ver métricas** de uso de API
- **Revisar errores** y logs

### **Google Sheets:**
- **Ver historial** de cambios
- **Monitorear** nuevas filas agregadas
- **Verificar** formato de datos

## 🚀 **Despliegue en Producción**

### **Para uso público:**
1. **Configurar dominio** en restricciones de API Key
2. **Usar HTTPS** obligatorio
3. **Monitorear** uso y errores
4. **Hacer respaldos** regulares del spreadsheet

### **Para uso interno:**
1. **Restringir** API Key a IPs específicas
2. **Usar autenticación** adicional si es necesario
3. **Limitar** acceso al spreadsheet

---

**¡Con esta configuración, tu formulario enviará datos directamente a Google Sheets! 🎉** 