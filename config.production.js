// Configuración para producción (GitHub Pages, Netlify, etc.)
// ⚠️ Este archivo contiene placeholders - NO credenciales reales
// Para uso local, usar config.public.js con credenciales reales

const CONFIG = {
    GOOGLE_API_KEY: 'TU_API_KEY_REAL_AQUI',
    GOOGLE_SHEET_ID: 'TU_SHEET_ID_REAL_AQUI'
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 