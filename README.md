# Formulario Personalizado con Google Sheets

Un formulario web moderno y personalizable que envía las respuestas directamente a Google Sheets.

## 🚀 Características

- **Diseño Moderno**: Interfaz atractiva y responsive
- **Múltiples Tipos de Preguntas**: Texto, email, teléfono, números, fechas, opciones múltiples, archivos
- **Validación en Tiempo Real**: Validación instantánea de campos
- **Subida de Archivos**: Drag & drop con límites de tamaño
- **Vista Previa**: Revisar respuestas antes de enviar
- **Integración con Google Sheets**: Respuestas automáticas en hojas de cálculo
- **Notificaciones**: Feedback visual para el usuario
- **Responsive**: Funciona en móviles y tablets

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Cuenta de Google con Google Sheets API habilitada

## 🛠️ Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <tu-repositorio>
   cd Formulario
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Google Sheets API**

   ### Paso 1: Crear un proyecto en Google Cloud Console
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Crea un nuevo proyecto o selecciona uno existente
   - Habilita la Google Sheets API

   ### Paso 2: Crear credenciales de servicio
   - Ve a "APIs y servicios" > "Credenciales"
   - Haz clic en "Crear credenciales" > "Cuenta de servicio"
   - Completa la información y descarga el archivo JSON
   - Renombra el archivo a `credentials.json` y colócalo en la raíz del proyecto

   ### Paso 3: Crear Google Sheet
   - Crea una nueva hoja de cálculo en Google Sheets
   - Comparte la hoja con la cuenta de servicio (email del archivo credentials.json)
   - Copia el ID de la hoja de la URL

4. **Configurar variables de entorno**
   ```bash
   cp env.example .env
   ```
   
   Edita el archivo `.env` y agrega tu ID de Google Sheet:
   ```
   GOOGLE_SHEET_ID=tu_id_de_google_sheet_aqui
   ```

5. **Crear carpeta para archivos**
   ```bash
   mkdir uploads
   ```

## 🚀 Ejecutar el Proyecto

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

El formulario estará disponible en: `http://localhost:3000`

## 📊 Configuración de Google Sheets

### Estructura de Columnas Recomendada

Crea una hoja llamada "Respuestas" con las siguientes columnas:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Nombre | Email | Teléfono | Edad | Género | Intereses | Comentarios | Fecha | Archivos |

### Configurar Encabezados

En la primera fila de tu Google Sheet, agrega los encabezados:

```
Timestamp | Nombre | Email | Teléfono | Edad | Género | Intereses | Comentarios | Fecha | Archivos
```

## 🎨 Personalización

### Modificar Preguntas

Edita el archivo `public/index.html` para agregar, quitar o modificar preguntas:

```html
<!-- Ejemplo: Agregar una nueva pregunta -->
<div class="form-group">
    <label for="nueva-pregunta">Nueva Pregunta</label>
    <input type="text" id="nueva-pregunta" name="nueva-pregunta">
</div>
```

### Cambiar Estilos

Modifica `public/styles.css` para personalizar colores, fuentes y diseño:

```css
/* Cambiar colores principales */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
}
```

### Agregar Nuevos Tipos de Preguntas

1. **Pregunta de escala (1-10)**
   ```html
   <div class="form-group">
       <label for="satisfaccion">Nivel de Satisfacción (1-10)</label>
       <input type="range" id="satisfaccion" name="satisfaccion" min="1" max="10" value="5">
       <span id="satisfaccion-value">5</span>
   </div>
   ```

2. **Pregunta de radio buttons**
   ```html
   <div class="form-group">
       <label>¿Cómo nos conociste?</label>
       <div class="radio-group">
           <label class="radio-item">
               <input type="radio" name="origen" value="redes-sociales">
               <span class="radio-mark"></span>
               Redes Sociales
           </label>
           <label class="radio-item">
               <input type="radio" name="origen" value="recomendacion">
               <span class="radio-mark"></span>
               Recomendación
           </label>
       </div>
   </div>
   ```

## 🔧 Configuración Avanzada

### Límites de Archivos

Modifica en `server.js`:
```javascript
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
        files: 5 // Máximo 5 archivos
    }
});
```

### Validaciones Personalizadas

Agrega validaciones en `public/script.js`:
```javascript
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Tu validación personalizada aquí
    if (field.name === 'mi-campo' && value.length < 3) {
        showFieldError(field, 'Mínimo 3 caracteres');
        return false;
    }
    
    return true;
}
```

## 📱 Características Responsive

El formulario se adapta automáticamente a diferentes tamaños de pantalla:

- **Desktop**: Diseño completo con columnas
- **Tablet**: Ajuste de espaciado
- **Móvil**: Diseño de una columna

## 🔒 Seguridad

- Validación del lado del cliente y servidor
- Límites de tamaño de archivos
- Sanitización de datos
- CORS configurado

## 🚀 Despliegue

### Heroku
1. Crea una app en Heroku
2. Conecta tu repositorio
3. Configura las variables de entorno en Heroku
4. Sube el archivo `credentials.json`

### Vercel
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Asegúrate de que `credentials.json` esté incluido

### Servidor VPS
1. Sube los archivos a tu servidor
2. Instala Node.js
3. Ejecuta `npm install && npm start`
4. Configura un proxy reverso con Nginx

## 🐛 Solución de Problemas

### Error de Google Sheets API
- Verifica que el archivo `credentials.json` esté en la raíz
- Asegúrate de que la API esté habilitada
- Confirma que la cuenta de servicio tenga permisos en la hoja

### Error de puerto
- Cambia el puerto en `.env` si el 3000 está ocupado
- Verifica que no haya otros servicios usando el puerto

### Archivos no se suben
- Verifica que la carpeta `uploads` exista
- Confirma los permisos de escritura
- Revisa los límites de tamaño

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la sección de solución de problemas
2. Verifica la configuración de Google Sheets
3. Revisa los logs del servidor

## 📄 Licencia

MIT License - Puedes usar, modificar y distribuir libremente.

---

¡Disfruta tu formulario personalizado! 🎉 