# 🔒 Guía de Seguridad

## ⚠️ **DATOS SENSIBLES PROTEGIDOS**

### **✅ Archivos Seguros:**
- `config.js` - **NO se sube a GitHub** (placeholders)
- `config.local.js` - **NO se sube a GitHub** (datos reales)
- `uploads/` - **NO se sube a GitHub** (archivos privados)

### **✅ Archivos Públicos:**
- `config.example.js` - Plantilla sin datos reales
- `index.html` - Formulario público
- `script.js` - Código sin credenciales
- `styles.css` - Estilos públicos

## 🔧 **Configuración Local**

### **Para usar el formulario:**
1. **Copiar** `config.local.js` como `config.js`
2. **O editar** `config.js` con tus credenciales reales

### **Para desarrollo:**
1. **Usar** `config.example.js` como base
2. **Reemplazar** con tus credenciales
3. **Renombrar** a `config.js`

## 🚨 **Verificación de Seguridad**

### **Antes de hacer público:**
- ✅ `config.js` contiene placeholders
- ✅ `config.local.js` está en `.gitignore`
- ✅ No hay API Keys en el código
- ✅ No hay Sheet IDs en el código

### **Después de hacer público:**
- ✅ Repositorio es público
- ✅ Datos sensibles protegidos
- ✅ Formulario funciona con configuración local

## 📋 **Checklist de Seguridad**

- [ ] `config.js` no contiene datos reales
- [ ] `config.local.js` está en `.gitignore`
- [ ] No hay credenciales en `script.js`
- [ ] No hay credenciales en `index.html`
- [ ] `uploads/` está protegido
- [ ] `.gitignore` está actualizado

---

**¡El proyecto está seguro para hacer público! 🎉** 