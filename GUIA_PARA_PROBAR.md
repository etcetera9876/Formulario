# 🚀 Guía para Probar tu Formulario Personalizado

## 📋 Paso 1: Instalar Node.js

### 🔗 Descargar Node.js
1. **Ve a:** https://nodejs.org/
2. **Haz clic en el botón verde** "LTS" (recomendado)
3. **Ejecuta el instalador** descargado
4. **Sigue las instrucciones** del instalador
5. **Reinicia tu terminal/PowerShell**

### ✅ Verificar instalación
Después de instalar, abre una nueva terminal y ejecuta:
```powershell
node --version
npm --version
```

## 📋 Paso 2: Probar el Formulario (Sin Google Sheets)

### 🎯 **Opción Rápida - Solo Frontend**
Si quieres ver el formulario funcionando sin Google Sheets:

1. **Abre el archivo:** `public/index.html`
2. **Haz doble clic** en el archivo
3. **Se abrirá en tu navegador**
4. **¡Puedes probar todas las funciones!**

### ✅ **Lo que puedes probar:**
- ✅ **Diseño y animaciones** del título
- ✅ **Validaciones** de campos
- ✅ **Subida de archivos** (drag & drop)
- ✅ **Vista previa** del formulario
- ✅ **Responsive design** (cambia el tamaño de la ventana)

## 📋 Paso 3: Probar con Servidor Completo

### 🔧 **Instalar dependencias**
```powershell
npm install
```

### 🚀 **Ejecutar servidor**
```powershell
npm start
```

### 🌐 **Acceder al formulario**
Abre tu navegador y ve a: `http://localhost:3000`

## 📋 Paso 4: Configurar Google Sheets (Opcional)

### 🔑 **Crear credenciales de Google**
1. Ve a: https://console.cloud.google.com/
2. Crea un nuevo proyecto
3. Habilita Google Sheets API
4. Crea credenciales de servicio
5. Descarga el archivo JSON
6. Renómbralo a `credentials.json`

### 📊 **Crear Google Sheet**
1. Ve a: https://sheets.google.com/
2. Crea una nueva hoja
3. Agrega encabezados en la primera fila
4. Comparte con la cuenta de servicio

### ⚙️ **Configurar variables**
1. Copia `env.example` a `.env`
2. Agrega tu ID de Google Sheet

## 🧪 **Qué Probar en el Formulario**

### 🎨 **Animaciones del Título**
- ✅ Efecto de entrada deslizante
- ✅ Brillo pulsante
- ✅ Ícono que rebota
- ✅ Partículas flotantes
- ✅ Efecto shimmer

### 📝 **Campos del Formulario**
- ✅ **Nombre** (obligatorio)
- ✅ **Email** (validación de formato)
- ✅ **Teléfono** (validación de formato)
- ✅ **Edad** (números, límites 1-120)
- ✅ **Género** (selector desplegable)
- ✅ **Intereses** (múltiples opciones)
- ✅ **Fecha** (selector de fecha)
- ✅ **Comentarios** (área de texto)

### 📁 **Subida de Archivos**
- ✅ **Drag & drop** de archivos
- ✅ **Selección múltiple** (hasta 5 archivos)
- ✅ **Límite de tamaño** (10MB por archivo)
- ✅ **Vista previa** de archivos seleccionados
- ✅ **Eliminar archivos** individualmente

### ✅ **Validaciones**
- ✅ **Campos obligatorios** marcados con *
- ✅ **Validación de email** en tiempo real
- ✅ **Validación de teléfono** en tiempo real
- ✅ **Límites de edad** (1-120 años)
- ✅ **Mensajes de error** claros

### 👁️ **Vista Previa**
- ✅ **Revisar respuestas** antes de enviar
- ✅ **Modal elegante** con toda la información
- ✅ **Lista de archivos** con tamaños

### 📱 **Responsive Design**
- ✅ **Desktop** - Diseño completo
- ✅ **Tablet** - Ajustes de espaciado
- ✅ **Móvil** - Diseño de una columna

## 🎯 **Comandos Útiles**

### 🚀 **Iniciar servidor**
```powershell
npm start
```

### 🔄 **Modo desarrollo (con auto-recarga)**
```powershell
npm run dev
```

### 📦 **Instalar dependencias**
```powershell
npm install
```

### 🧹 **Limpiar caché**
```powershell
npm cache clean --force
```

## 🐛 **Solución de Problemas**

### ❌ **Error: "npm no se reconoce"**
- Instala Node.js desde nodejs.org
- Reinicia la terminal

### ❌ **Error: "puerto 3000 en uso"**
- Cambia el puerto en `.env`:
  ```
  PORT=3001
  ```

### ❌ **Error: "módulo no encontrado"**
- Ejecuta: `npm install`
- Verifica que `node_modules` existe

### ❌ **Error: "credentials.json no encontrado"**
- Descarga credenciales de Google Cloud
- Renombra a `credentials.json`
- Colócalo en la raíz del proyecto

## 🎉 **¡Listo para Probar!**

Una vez que tengas Node.js instalado:

1. **Ejecuta:** `.\probar-formulario.bat`
2. **O manualmente:**
   ```powershell
   npm install
   npm start
   ```
3. **Abre:** http://localhost:3000
4. **¡Disfruta tu formulario!**

---

**¿Necesitas ayuda con algún paso específico?** ¡No dudes en preguntar! 