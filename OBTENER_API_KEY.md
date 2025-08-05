# 🔑 Obtener API Key para Frontend

## 📋 **Paso a Paso para Obtener API Key**

### **1. Ir a Google Cloud Console**
1. **Abrir:** https://console.cloud.google.com/
2. **Seleccionar** tu proyecto (el mismo donde descargaste key.json)

### **2. Ir a Credenciales**
1. **Menú lateral:** "APIs y servicios" > "Credenciales"
2. **Verás** tu archivo key.json listado

### **3. Crear API Key**
1. **Hacer clic:** "Crear credenciales" (botón azul)
2. **Seleccionar:** "Clave de API"
3. **Se generará** una API Key como: `AIzaSyC...`

### **4. Configurar Restricciones (Recomendado)**
1. **Hacer clic** en la API Key creada
2. **Nombre:** "Formulario Frontend"
3. **Restricción de aplicación:** "Sitios web"
4. **Agregar dominio:** `http://localhost` (para pruebas)
5. **Restricción de API:** "Google Sheets API"
6. **Guardar**

### **5. Copiar API Key**
- **Copiar** la API Key completa
- **Guardar** en lugar seguro

## 🔧 **Actualizar el Código**

### **1. Abrir archivo:**
```
public/script.js
```

### **2. Buscar línea:**
```javascript
const GOOGLE_API_KEY = 'AIzaSyBwXKzXKzXKzXKzXKzXKzXKzXKzXKzXKzXK';
```

### **3. Reemplazar con tu API Key:**
```javascript
const GOOGLE_API_KEY = 'TU_API_KEY_REAL_AQUI';
```

## 🔒 **Seguridad**

### **✅ Lo que SÍ hacer:**
- Usar API Key con restricciones
- Restringir a tu dominio específico
- Limitar a Google Sheets API

### **❌ Lo que NO hacer:**
- Usar archivo key.json en frontend
- Compartir API Key públicamente
- Dejar API Key sin restricciones

## 🧹 **Limpiar archivo key.json**

### **Opción 1: Eliminar (Recomendado)**
```bash
# Eliminar archivo de credenciales
rm uploads/key.json
```

### **Opción 2: Mover a carpeta segura**
```bash
# Mover a carpeta fuera del proyecto
mv uploads/key.json ../credentials/
```

## ✅ **Verificar Configuración**

1. **Abrir formulario** en navegador
2. **Llenar formulario** de prueba
3. **Enviar** y verificar en Google Sheets
4. **Revisar consola** para errores

## 🆘 **Si tienes problemas:**

### **Error: "API key not valid"**
- Verificar que Google Sheets API esté habilitada
- Comprobar que la API Key esté correctamente copiada

### **Error: "Access denied"**
- Verificar que el spreadsheet esté público
- Comprobar restricciones de dominio

---

**¡Con la API Key correcta, tu formulario funcionará perfectamente! 🎉** 