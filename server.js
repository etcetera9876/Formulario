const express = require('express');
const { google } = require('googleapis');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configuración de multer para subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Configuración de Google Sheets API
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json', // Necesitarás crear este archivo
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para enviar respuestas a Google Sheets
app.post('/submit-form', upload.array('files', 5), async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files || [];
    
    // Preparar datos para Google Sheets
    const timestamp = new Date().toLocaleString('es-ES');
    const rowData = [
      timestamp,
      formData.nombre || '',
      formData.email || '',
      formData.telefono || '',
      formData.edad || '',
      formData.genero || '',
      formData.intereses ? formData.intereses.join(', ') : '',
      formData.comentarios || '',
      formData.fecha || '',
      formData.archivos ? files.map(f => f.filename).join(', ') : ''
    ];

    // ID de tu Google Sheet (necesitarás reemplazar esto)
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Respuestas!A:J'; // Ajusta según tus columnas

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [rowData],
      },
    });

    res.json({ 
      success: true, 
      message: 'Formulario enviado exitosamente',
      filesUploaded: files.length
    });

  } catch (error) {
    console.error('Error al enviar formulario:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el formulario',
      error: error.message 
    });
  }
});

// Ruta para obtener estadísticas (opcional)
app.get('/stats', async (req, res) => {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Respuestas!A:J';
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    const totalResponses = rows.length - 1; // Restar la fila de encabezados

    res.json({
      totalResponses,
      lastResponse: rows[rows.length - 1] || null
    });

  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Asegúrate de configurar las credenciales de Google Sheets');
}); 