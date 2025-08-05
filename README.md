# 📋 Formulario de Reclutamiento - JobConnection Services

## 🚀 **Descripción**

Formulario web moderno y responsive para recopilar información de candidatos. Funciona completamente en el navegador sin necesidad de servidor backend.

### **✅ Características:**
- **Frontend puro** - Sin servidor necesario
- **Responsive design** - Optimizado para móviles
- **Google Sheets integration** - Datos automáticos
- **Validación en tiempo real** - Campos inteligentes
- **Subida de archivos** - Currículums y documentos
- **Panel de administración** - Gestión de datos
- **QR Code ready** - Perfecto para eventos

## 📱 **Cómo Usar**

### **Para Usuarios (Candidatos):**
1. **Abrir** el formulario en cualquier navegador
2. **Completar** todos los campos requeridos
3. **Subir archivos** (opcional)
4. **Enviar formulario** - Datos se guardan automáticamente

### **Para Administradores:**
1. **Botón de administración** (⚙️) en esquina superior derecha
2. **Panel de control** con estadísticas
3. **Descargar datos** en formato CSV
4. **Gestionar submisiones**

## 🔧 **Configuración**

### **1. Configuración Local:**
```bash
# Copiar archivo de ejemplo y configurar
cp config.example.js config.js
# Editar config.js con tus credenciales reales
```

### **2. Configuración de Google Sheets:**
1. **Crear proyecto** en Google Cloud Console
2. **Activar Google Sheets API**
3. **Crear API Key** con restricciones
4. **Editar config.js** con tus credenciales

### **3. Configurar Google Sheet:**
1. **Hacer público** el spreadsheet
2. **Compartir** con "Cualquier persona con el enlace puede ver"

## 🌐 **Despliegue Gratuito**

### **Opción 1: GitHub Pages (Recomendado)**
1. **Hacer público** el repositorio
2. **Settings** > **Pages**
3. **Source:** "Deploy from a branch"
4. **Branch:** `main`
5. **URL:** `https://etcetera9876.github.io/Formulario/`

### **Opción 2: Netlify**
1. **Ir a:** https://netlify.com
2. **Drag & drop** la carpeta del proyecto
3. **URL automática** generada

### **Opción 3: Vercel**
1. **Ir a:** https://vercel.com
2. **Conectar** con GitHub
3. **Deploy automático**

## 🔒 **Seguridad**

### **✅ Datos Protegidos:**
- `config.js` - **NO se sube a GitHub** (placeholders)
- `config.local.js` - **NO se sube a GitHub** (datos reales)
- `uploads/` - **NO se sube a GitHub** (archivos privados)

### **✅ Archivos Públicos:**
- `config.example.js` - Plantilla sin datos reales
- `index.html` - Formulario público
- `script.js` - Código sin credenciales
- `styles.css` - Estilos públicos

## 📊 **Funcionalidades**

### **Campos del Formulario:**
- **Información Personal:** Nombre, email, teléfono, fecha nacimiento, género, ciudad
- **Disponibilidad:** Días de la semana, turnos preferidos
- **Movilidad:** Opciones de transporte, capacidad de dar rides
- **Restricciones:** Limitaciones de horario o disponibilidad
- **Habilidades:** Computadora, maquinaria, limpieza, exámenes
- **Experiencia:** Puestos específicos, trabajos anteriores
- **Archivos:** Subida de currículum
- **Comentarios:** Información adicional

### **Características Avanzadas:**
- **Validación en tiempo real** de campos
- **Auto-completado** de emails con sugerencias
- **Formato automático** de teléfonos
- **Selector de fecha** personalizado
- **Lista inteligente** de ciudades con auto-completado
- **Subida de archivos** con drag & drop
- **Vista previa** antes de enviar
- **Notificaciones** de éxito/error

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

## 🆘 **Solución de Problemas**

### **Formulario no envía:**
- Verificar que todos los campos requeridos estén completos
- Revisar conexión a internet
- Limpiar caché del navegador

### **Datos no se guardan:**
- Verificar espacio disponible en localStorage
- Comprobar que JavaScript esté habilitado
- Revisar consola del navegador para errores

### **Google Sheets no funciona:**
- Verificar configuración de API Key
- Comprobar que el spreadsheet esté público
- Revisar restricciones de dominio en Google Cloud Console

## 📋 **Estructura del Proyecto**

```
Formulario/
├── index.html          # Formulario principal
├── script.js           # Lógica y funcionalidades
├── styles.css          # Estilos y diseño
├── config.js           # Configuración (NO se sube a GitHub)
├── config.local.js     # Datos reales (NO se sube a GitHub)
├── config.example.js   # Plantilla de configuración
├── uploads/            # Archivos subidos (NO se sube a GitHub)
│   ├── logo-corto.png  # Logo de la empresa
│   └── .gitkeep        # Mantener carpeta
├── netlify.toml        # Configuración para Netlify
├── .gitignore          # Archivos excluidos de Git
└── README.md           # Esta documentación
```

## 🚀 **Despliegue Rápido**

### **Para uso inmediato:**
1. **Descargar** todos los archivos
2. **Copiar** `config.local.js` como `config.js`
3. **Abrir** `index.html` en el navegador
4. **¡Listo!**

### **Para uso en internet:**
1. **Subir** a GitHub Pages, Netlify o Vercel
2. **Configurar** Google Cloud Console
3. **Generar** QR code para eventos
4. **¡Compartir!**

---

**¡El formulario está listo para usar en producción! 🎉** 