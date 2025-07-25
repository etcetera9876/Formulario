@echo off
echo ========================================
echo    PROBAR FORMULARIO PERSONALIZADO
echo ========================================
echo.

echo 1. Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js NO está instalado
    echo.
    echo 📥 Para instalar Node.js:
    echo 1. Ve a https://nodejs.org/
    echo 2. Descarga la versión LTS (recomendada)
    echo 3. Ejecuta el instalador
    echo 4. Reinicia esta ventana
    echo.
    pause
    exit /b 1
) else (
    echo ✅ Node.js está instalado
    node --version
)

echo.
echo 2. Verificando npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm NO está disponible
    pause
    exit /b 1
) else (
    echo ✅ npm está disponible
    npm --version
)

echo.
echo 3. Instalando dependencias...
if not exist "node_modules" (
    echo 📦 Instalando paquetes...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Error al instalar dependencias
        pause
        exit /b 1
    )
) else (
    echo ✅ Dependencias ya instaladas
)

echo.
echo 4. Verificando archivos de configuración...
if not exist ".env" (
    echo ⚠️  Archivo .env no encontrado
    echo.
    echo 📝 Para crear .env:
    echo 1. Copia env.example a .env
    echo 2. Edita .env y agrega tu ID de Google Sheet
    echo.
    copy env.example .env
    echo ✅ Archivo .env creado desde env.example
)

if not exist "credentials.json" (
    echo ⚠️  Archivo credentials.json no encontrado
    echo.
    echo 🔑 Para obtener credentials.json:
    echo 1. Ve a https://console.cloud.google.com/
    echo 2. Crea un proyecto y habilita Google Sheets API
    echo 3. Crea credenciales de servicio
    echo 4. Descarga el archivo JSON
    echo 5. Renómbralo a credentials.json
    echo.
)

echo.
echo 5. Iniciando servidor...
echo 🚀 El formulario estará disponible en: http://localhost:3000
echo.
echo 📋 Para detener el servidor: Ctrl+C
echo.
npm start 