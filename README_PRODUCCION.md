# 📋 Formulario de Reclutamiento - Versión de Producción

## 🚀 **Características de la Versión de Producción**

Esta versión del formulario funciona **completamente en el navegador** sin necesidad de servidor backend. Es perfecta para:

- ✅ **Uso inmediato** sin instalación de software
- ✅ **Compartir fácilmente** via QR o enlace
- ✅ **Funcionar offline** una vez cargado
- ✅ **Guardar datos localmente** en el dispositivo
- ✅ **Descargar respuestas** en formato CSV

## 🔒 **Configuración Segura de API Key**

### **⚠️ Importante - Seguridad:**
La API Key de Google está configurada de forma segura para que **NO se suba a GitHub**.

### **📋 Configuración Inicial:**
1. **Copiar archivo de ejemplo:**
   ```bash
   cp config.example.js config.js
   ```

2. **Editar config.js:**
   ```javascript
   const CONFIG = {
       GOOGLE_API_KEY: 'TU_API_KEY_REAL_AQUI',
       GOOGLE_SHEET_ID: 'TU_SHEET_ID_AQUI'
   };
   ```

3. **Reemplazar con tus credenciales reales**

### **🔒 Archivos Protegidos:**
- `config.js` - **NO se sube a GitHub**
- `config.example.js` - Se sube como ejemplo
- `.gitignore` - Protege archivos sensibles

### **✅ Verificar Configuración:**
- El archivo `config.js` debe existir localmente
- Las credenciales deben ser correctas
- El formulario debe funcionar sin errores

## 📱 **Cómo Usar**

### **Para los Usuarios (Candidatos):**
1. **Abrir el formulario** en cualquier navegador
2. **Completar todos los campos** requeridos
3. **Subir archivos** (opcional)
4. **Enviar formulario** - los datos se guardan automáticamente
5. **Recibir confirmación** de envío exitoso

### **Para el Administrador:**
1. **Botón de administración** aparece en la esquina superior derecha (⚙️)
2. **Panel de control** muestra estadísticas y opciones
3. **Descargar datos** en formato CSV
4. **Ver últimas submisiones** en tiempo real
5. **Gestionar datos** (borrar si es necesario)

## 🔧 **Funcionalidades**

### **✅ Campos del Formulario:**
- **Información Personal:** Nombre, email, teléfono, fecha nacimiento, género, ciudad
- **Disponibilidad:** Días de la semana, turnos preferidos
- **Movilidad:** Opciones de transporte, capacidad de dar rides
- **Restricciones:** Limitaciones de horario o disponibilidad
- **Habilidades:** Computadora, maquinaria, limpieza, exámenes
- **Experiencia:** Puestos específicos, trabajos anteriores
- **Archivos:** Subida de currículum
- **Comentarios:** Información adicional

### **✅ Características Avanzadas:**
- **Validación en tiempo real** de campos
- **Auto-completado** de emails con sugerencias
- **Formato automático** de teléfonos
- **Selector de fecha** personalizado
- **Lista inteligente** de ciudades con auto-completado
- **Subida de archivos** con drag & drop
- **Vista previa** antes de enviar
- **Notificaciones** de éxito/error

### **✅ Panel de Administración:**
- **Estadísticas** en tiempo real
- **Descarga de datos** en CSV
- **Gestión de submisiones**
- **Vista de últimas respuestas**

## 📊 **Almacenamiento de Datos**

### **LocalStorage:**
- Los datos se guardan en el navegador del dispositivo
- **Persistencia:** Los datos permanecen hasta que se borren manualmente
- **Privacidad:** Solo accesible desde el mismo dispositivo
- **Capacidad:** Hasta 5-10MB de datos (miles de formularios)

### **Formato CSV:**
- **Compatible** con Excel, Google Sheets, etc.
- **Estructurado** con todas las columnas organizadas
- **Descargable** automáticamente al enviar cada formulario
- **Accumulativo** - incluye todos los formularios enviados

## 🎯 **Casos de Uso**

### **Eventos de Reclutamiento:**
1. **Configurar** el formulario en una tablet/laptop
2. **Mostrar QR** para que los candidatos escaneen
3. **Recopilar** información automáticamente
4. **Descargar** datos al final del evento

### **Reclutamiento Continuo:**
1. **Compartir enlace** en redes sociales
2. **Recibir** aplicaciones automáticamente
3. **Revisar** panel de administración regularmente
4. **Descargar** datos según necesidad

### **Feria de Empleo:**
1. **Múltiples dispositivos** con el mismo formulario
2. **QR codes** en cada stand
3. **Datos centralizados** en cada dispositivo
4. **Consolidación** manual de CSV al final

## 🔒 **Seguridad y Privacidad**

### **Ventajas:**
- ✅ **Sin servidor externo** - datos no salen del dispositivo
- ✅ **Sin cookies** de terceros
- ✅ **Sin tracking** o análisis externo
- ✅ **Control total** sobre los datos

### **Consideraciones:**
- ⚠️ **Datos locales** - se pierden si se borra el navegador
- ⚠️ **Un dispositivo** - no se sincronizan entre dispositivos
- ⚠️ **Backup manual** - depende de descargas regulares

## 📱 **Compatibilidad**

### **Navegadores Soportados:**
- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles

### **Dispositivos:**
- ✅ **Computadoras** (Windows, Mac, Linux)
- ✅ **Tablets** (iPad, Android)
- ✅ **Smartphones** (iOS, Android)
- ✅ **Smart TVs** con navegador

## 🚀 **Despliegue**

### **Opción 1: Archivo Local**
1. **Descargar** todos los archivos
2. **Abrir** `index.html` en el navegador
3. **Listo** para usar

### **Opción 2: Hosting Web**
1. **Subir** archivos a cualquier hosting
2. **Compartir** URL del formulario
3. **Funciona** desde cualquier dispositivo

### **Opción 3: GitHub Pages**
1. **Crear repositorio** en GitHub
2. **Subir** archivos del proyecto
3. **Activar** GitHub Pages
4. **Compartir** URL generada

## 📋 **Mantenimiento**

### **Respaldo Regular:**
- **Descargar CSV** semanalmente
- **Guardar** en ubicación segura
- **Verificar** integridad de datos

### **Actualizaciones:**
- **Modificar** archivos HTML/CSS/JS según necesidad
- **Probar** en diferentes dispositivos
- **Mantener** copias de respaldo

## 🆘 **Solución de Problemas**

### **Formulario no envía:**
- Verificar que todos los campos requeridos estén completos
- Revisar conexión a internet (para cargar archivos)
- Limpiar caché del navegador

### **Datos no se guardan:**
- Verificar espacio disponible en localStorage
- Comprobar que JavaScript esté habilitado
- Revisar consola del navegador para errores

### **Archivos no se suben:**
- Verificar tamaño de archivos (máximo 5MB)
- Comprobar formato de archivos permitidos
- Revisar permisos del navegador

## 📞 **Soporte**

Para problemas técnicos o personalizaciones:
- **Revisar** este README
- **Verificar** consola del navegador
- **Probar** en diferentes navegadores
- **Contactar** al desarrollador si persiste el problema

---

**¡El formulario está listo para usar en producción! 🎉** 