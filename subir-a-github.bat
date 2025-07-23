@echo off
echo ========================================
echo    SUBIR FORMULARIO A GITHUB
echo ========================================
echo.

echo 1. Verificando estado de Git...
git status
echo.

echo 2. Agregando todos los archivos...
git add .
echo.

echo 3. Haciendo commit de los cambios...
git commit -m "Formulario personalizado completo con animaciones"
echo.

echo 4. Verificando repositorio remoto...
git remote -v
echo.

echo ========================================
echo    INSTRUCCIONES MANUALES
echo ========================================
echo.
echo Si no tienes repositorio remoto configurado:
echo.
echo 1. Ve a https://github.com y crea un nuevo repositorio
echo 2. Copia la URL del repositorio (ejemplo: https://github.com/tu-usuario/formulario.git)
echo 3. Ejecuta: git remote add origin URL_DEL_REPOSITORIO
echo 4. Ejecuta: git push -u origin main
echo.
echo Si ya tienes repositorio configurado:
echo Ejecuta: git push
echo.
pause 