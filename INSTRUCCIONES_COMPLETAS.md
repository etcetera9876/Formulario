# 🚀 Instrucciones Completas para Configurar tu Formulario

## 📋 Paso 1: Instalar Node.js

### Opción A: Descarga Directa (Recomendada)
1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (Long Term Support)
3. Ejecuta el instalador y sigue las instrucciones
4. Reinicia tu terminal/PowerShell

### Opción B: Usando Chocolatey (si lo tienes instalado)
```powershell
choco install nodejs
```

### Verificar la instalación
```powershell
node --version
npm --version
```

## 📋 Paso 2: Instalar Dependencias del Proyecto

Una vez que tengas Node.js instalado, ejecuta:

```powershell
npm install
```

## 📋 Paso 3: Configurar Google Sheets API

### 3.1 Crear Proyecto en Google Cloud Console
1. Ve a [console.cloud.google.com](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Anota el ID del proyecto

### 3.2 Habilitar Google Sheets API
1. En tu proyecto, ve a "APIs y servicios" > "Biblioteca"
2. Busca "Google Sheets API"
3. Haz clic en "Habilitar"

### 3.3 Crear Credenciales de Servicio
1. Ve a "APIs y servicios" > "Credenciales"
2. Haz clic en "Crear credenciales" > "Cuenta de servicio"
3. Completa la información:
   - **Nombre**: `formulario-sheets`
   - **Descripción**: `Cuenta de servicio para formulario`
4. Haz clic en "Crear y continuar"
5. En "Otorgar acceso a esta cuenta de servicio":
   - Selecciona "Editor"
6. Haz clic en "Listo"

### 3.4 Descargar Credenciales
1. En la lista de cuentas de servicio, haz clic en la que acabas de crear
2. Ve a la pestaña "Claves"
3. Haz clic en "Agregar clave" > "Crear nueva clave"
4. Selecciona "JSON"
5. Haz clic en "Crear"
6. El archivo se descargará automáticamente
7. **Renombra el archivo a `credentials.json`**
8. **Mueve el archivo a la carpeta raíz de tu proyecto** (donde está `package.json`)

## 📋 Paso 4: Crear Google Sheet

### 4.1 Crear la Hoja de Cálculo
1. Ve a [sheets.google.com](https://sheets.google.com/)
2. Crea una nueva hoja de cálculo
3. Renombra la primera hoja a "Respuestas"

### 4.2 Configurar Encabezados
En la primera fila, agrega estos encabezados:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Nombre | Email | Teléfono | Edad | Género | Intereses | Comentarios | Fecha | Archivos |

### 4.3 Compartir la Hoja
1. Haz clic en "Compartir" (esquina superior derecha)
2. En el campo de email, pega el email de la cuenta de servicio
   - Lo encuentras en el archivo `credentials.json` en el campo `client_email`
3. Dale permisos de "Editor"
4. Haz clic en "Enviar"

### 4.4 Obtener el ID de la Hoja
1. En la URL de tu Google Sheet, copia el ID
2. Ejemplo: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
3. El ID es: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## 📋 Paso 5: Configurar Variables de Entorno

### 5.1 Crear archivo .env
1. Copia el archivo `env.example` a `.env`:
   ```powershell
   copy env.example .env
   ```

### 5.2 Editar .env
Abre el archivo `.env` y reemplaza:
```
GOOGLE_SHEET_ID=tu_id_de_google_sheet_aqui
```

Con tu ID real:
```
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

## 📋 Paso 6: Ejecutar el Formulario

### 6.1 Modo Desarrollo
```powershell
npm run dev
```

### 6.2 Modo Producción
```powershell
npm start
```

### 6.3 Acceder al Formulario
Abre tu navegador y ve a: `http://localhost:3000`

## 🎯 Estructura Final del Proyecto

Tu carpeta debería verse así:
```
Formulario/
├── node_modules/          (se crea automáticamente)
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── uploads/
│   └── .gitkeep
├── .env                   (crear con tu ID de Google Sheet)
├── credentials.json       (descargar de Google Cloud)
├── package.json
├── server.js
├── README.md
└── INSTRUCCIONES_COMPLETAS.md
```

## 🧪 Probar el Formulario

1. **Llena el formulario** con datos de prueba
2. **Sube algunos archivos** (opcional)
3. **Haz clic en "Vista Previa"** para revisar
4. **Haz clic en "Enviar Formulario"**
5. **Verifica en tu Google Sheet** que aparezca la nueva fila

## 🔧 Personalización

### Cambiar Preguntas
Edita `public/index.html` para agregar/quitar preguntas

### Cambiar Colores
Edita `public/styles.css` para personalizar el diseño

### Agregar Validaciones
Edita `public/script.js` para validaciones personalizadas

## 🚀 Despliegue

### Opción 1: Heroku (Gratis)
1. Crea cuenta en [heroku.com](https://heroku.com)
2. Instala Heroku CLI
3. Ejecuta:
   ```powershell
   heroku create tu-formulario
   git add .
   git commit -m "Primer commit"
   git push heroku main
   ```

### Opción 2: Vercel (Gratis)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno
4. ¡Listo!

### Opción 3: Servidor Local
- El formulario ya funciona en `localhost:3000`
- Para acceso externo, configura tu router

## 🐛 Solución de Problemas

### Error: "npm no se reconoce"
- Instala Node.js desde [nodejs.org](https://nodejs.org/)

### Error: "credentials.json no encontrado"
- Descarga las credenciales de Google Cloud Console
- Renombra el archivo a `credentials.json`
- Colócalo en la raíz del proyecto

### Error: "Google Sheets API no habilitada"
- Ve a Google Cloud Console
- Habilita la Google Sheets API

### Error: "Permisos insuficientes"
- Comparte tu Google Sheet con la cuenta de servicio
- El email está en `credentials.json` en `client_email`

### Error: "Puerto 3000 en uso"
- Cambia el puerto en `.env`:
  ```
  PORT=3001
  ```

## 📞 Soporte

Si tienes problemas:

1. **Verifica Node.js**: `node --version`
2. **Verifica dependencias**: `npm list`
3. **Revisa logs**: Los errores aparecen en la terminal
4. **Verifica archivos**: Asegúrate de que `credentials.json` y `.env` existan

## 🎉 ¡Listo!

Tu formulario personalizado está funcionando y conectado a Google Sheets. Puedes:

- ✅ Recibir respuestas automáticamente
- ✅ Subir archivos
- ✅ Validar datos
- ✅ Personalizar completamente
- ✅ Desplegar en internet

¡Disfruta tu formulario! 🚀 