@echo off
echo ========================================
echo    Iniciando Servidor Local
echo ========================================
echo.
echo El formulario estara disponible en:
echo http://localhost:8000
echo.
echo Presiona Ctrl+C para detener el servidor
echo ========================================
echo.

REM Intentar diferentes comandos para iniciar servidor
echo Intentando iniciar servidor...

REM Opcion 1: Python 3
python -m http.server 8000 2>nul
if %errorlevel% equ 0 goto :success

REM Opcion 2: Python 2
python -m SimpleHTTPServer 8000 2>nul
if %errorlevel% equ 0 goto :success

REM Opcion 3: py (Windows)
py -m http.server 8000 2>nul
if %errorlevel% equ 0 goto :success

REM Opcion 4: Buscar Python en PATH
where python >nul 2>&1
if %errorlevel% equ 0 (
    python -m http.server 8000
    goto :success
)

echo.
echo ========================================
echo    ERROR: Python no encontrado
echo ========================================
echo.
echo Para solucionar esto:
echo 1. Instalar Python desde: https://python.org
echo 2. O usar GitHub Pages (recomendado)
echo.
echo Presiona cualquier tecla para continuar...
pause >nul

:success
echo.
echo Servidor iniciado correctamente!
echo Abre tu navegador en: http://localhost:8000
echo.
pause 