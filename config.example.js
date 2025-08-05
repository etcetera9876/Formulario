// Ejemplo de configuración - Copiar este archivo como config.js
// ⚠️ IMPORTANTE: Reemplazar con tus credenciales reales

const CONFIG = {
    GOOGLE_API_KEY: 'TU_API_KEY_AQUI',
    GOOGLE_SHEET_ID: 'TU_SHEET_ID_AQUI'
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 