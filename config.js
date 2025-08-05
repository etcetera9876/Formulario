// Configuración de Google Sheets API
// ⚠️ IMPORTANTE: Este archivo contiene credenciales reales para GitHub Pages

const CONFIG = {
    GOOGLE_API_KEY: 'AIzaSyC0kwwlL4-9OJrzh-l9GhvQ7yo2rFBTvRo',
    GOOGLE_SHEET_ID: '1mBN9A0nxgza0im64VTXVyqwYVQ9mpXyKWBCVZvcUN7U'
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
} 