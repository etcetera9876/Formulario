# 🧪 Cómo Probar el Formulario

## 🚀 **Opción 1: Servidor Local (Recomendado)**

### **Usar el archivo batch:**
1. **Hacer doble clic** en `iniciar-servidor.bat`
2. **Abrir navegador** en: `http://localhost:8000`
3. **Probar formulario** completo

### **Manualmente:**
```bash
# Si tienes Python instalado
python -m http.server 8000

# Luego abrir: http://localhost:8000
```

---

## 📁 **Opción 2: Archivo Local (Limitado)**

### **Para pruebas básicas:**
1. **Abrir** `index.html` directamente
2. **Funciona** pero sin Google Sheets
3. **Datos se guardan** en localStorage
4. **Descarga CSV** automáticamente

---

## 🌐 **Opción 3: GitHub Pages (Mejor)**

### **Activar GitHub Pages:**
1. **Ir a:** https://github.com/etcetera9876/Formulario
2. **Settings** > **Pages**
3. **Source:** "Deploy from a branch"
4. **Branch:** `main`
5. **Save**

### **URL resultante:**
```
https://etcetera9876.github.io/Formulario/
```

---

## 🔧 **Solución de Problemas**

### **Error: "postMessage"**
- **Causa:** Ejecutando en `file://`
- **Solución:** Usar servidor local o GitHub Pages

### **Error: "API key not valid"**
- **Causa:** API Key incorrecta o restricciones
- **Solución:** Verificar configuración en Google Cloud Console

### **Error: "Access denied"**
- **Causa:** Spreadsheet no público
- **Solución:** Hacer público el Google Sheet

---

## 📊 **Verificar Funcionamiento**

### **1. Formulario local:**
- ✅ **Se llena** sin errores
- ✅ **Validaciones** funcionan
- ✅ **CSV se descarga**
- ✅ **localStorage** guarda datos

### **2. Google Sheets:**
- ✅ **Datos aparecen** en spreadsheet
- ✅ **No errores** en consola
- ✅ **Notificación** de éxito

### **3. Panel de administración:**
- ✅ **Botón ⚙️** aparece
- ✅ **Estadísticas** se muestran
- ✅ **Descarga** funciona

---

## 🎯 **Próximos Pasos**

### **Para producción:**
1. **Activar GitHub Pages**
2. **Configurar dominio** en Google Cloud Console
3. **Generar QR code**
4. **Probar en móviles**

### **Para eventos:**
1. **Imprimir QR codes**
2. **Configurar tablet/laptop**
3. **Probar conexión**
4. **Hacer respaldo** de datos

---

**¡El formulario está listo para usar! 🎉** 