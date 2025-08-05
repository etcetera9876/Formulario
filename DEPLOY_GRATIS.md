# 🌐 Subir Formulario Gratis a Internet

## 🚀 **Opción 1: GitHub Pages (Recomendado)**

### **Ventajas:**
- ✅ **Completamente gratis**
- ✅ **HTTPS automático**
- ✅ **Fácil de configurar**
- ✅ **Integrado con tu repositorio**

### **Pasos:**

#### **1. Activar GitHub Pages:**
1. **Ir a tu repositorio:** https://github.com/etcetera9876/Formulario
2. **Settings** > **Pages**
3. **Source:** Seleccionar "Deploy from a branch"
4. **Branch:** `main`
5. **Folder:** `/ (root)`
6. **Save**

#### **2. Configurar para GitHub Pages:**
1. **Mover archivos** a la raíz del repositorio:
   ```bash
   # Mover archivos de public/ a la raíz
   mv public/* .
   mv config.js .
   ```

2. **Actualizar rutas** en index.html:
   ```html
   <!-- Cambiar -->
   <script src="../config.js"></script>
   <!-- Por -->
   <script src="config.js"></script>
   ```

#### **3. URL final:**
```
https://etcetera9876.github.io/Formulario/
```

---

## 🚀 **Opción 2: Netlify (Alternativa)**

### **Ventajas:**
- ✅ **Muy fácil de usar**
- ✅ **Drag & drop**
- ✅ **HTTPS automático**
- ✅ **Dominio personalizado**

### **Pasos:**
1. **Ir a:** https://netlify.com
2. **Crear cuenta** gratuita
3. **Drag & drop** la carpeta del proyecto
4. **URL automática** generada

---

## 🚀 **Opción 3: Vercel (Alternativa)**

### **Ventajas:**
- ✅ **Muy rápido**
- ✅ **Integración con GitHub**
- ✅ **HTTPS automático**

### **Pasos:**
1. **Ir a:** https://vercel.com
2. **Conectar** con GitHub
3. **Seleccionar** repositorio
4. **Deploy automático**

---

## 🔧 **Configuración para Producción**

### **1. Actualizar API Key:**
```javascript
// En config.js - Agregar tu dominio
const CONFIG = {
    GOOGLE_API_KEY: 'AIzaSyC0kwwlL4-9OJrzh-l9GhvQ7yo2rFBTvRo',
    GOOGLE_SHEET_ID: '1mBN9A0nxgza0im64VTXVyqwYVQ9mpXyKWBCVZvcUN7U'
};
```

### **2. Configurar Google Cloud Console:**
1. **Ir a:** https://console.cloud.google.com
2. **APIs y servicios** > **Credenciales**
3. **Editar** tu API Key
4. **Restricción de aplicación:** "Sitios web"
5. **Agregar dominio:** `https://etcetera9876.github.io`
6. **Guardar**

### **3. Verificar Google Sheet:**
1. **Abrir:** https://docs.google.com/spreadsheets/d/1mBN9A0nxgza0im64VTXVyqwYVQ9mpXyKWBCVZvcUN7U
2. **Compartir** > "Cualquier persona con el enlace puede ver"

---

## 📱 **QR Code para Móviles**

### **Generar QR:**
1. **Ir a:** https://qr-code-generator.com
2. **Pegar URL:** `https://etcetera9876.github.io/Formulario/`
3. **Descargar** QR code
4. **Imprimir** para eventos

---

## 🎯 **Resultado Final**

### **URL Pública:**
```
https://etcetera9876.github.io/Formulario/
```

### **Funcionalidades:**
- ✅ **Accesible desde cualquier dispositivo**
- ✅ **QR code para escanear**
- ✅ **Datos van a Google Sheets**
- ✅ **Completamente gratis**

---

**¡Tu formulario estará disponible en internet gratis! 🎉** 