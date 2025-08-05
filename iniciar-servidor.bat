@echo off
echo ========================================
echo    Iniciando Servidor Local
echo ========================================
echo.
echo Verificando Python...

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python no está instalado
    echo.
    echo Soluciones:
    echo 1. Instalar Python desde https://python.org
    echo 2. O usar la opción alternativa (abrir index.html directamente)
    echo.
    pause
    exit /b 1
)

echo Python encontrado. Iniciando servidor...
echo.
echo El formulario estará disponible en:
echo http://localhost:8000
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

cd /d "%~dp0"
python -m http.server 8000

pause 