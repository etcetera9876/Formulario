// Elementos del DOM
const form = document.getElementById('customForm');
const previewBtn = document.getElementById('previewBtn');
const submitBtn = document.getElementById('submitBtn');
const modal = document.getElementById('previewModal');
const closeBtn = document.querySelector('.close');
const previewContent = document.getElementById('previewContent');
const notification = document.getElementById('notification');
const fileInput = document.getElementById('files');
const fileList = document.getElementById('fileList');

// Elementos del modal de ejemplo
const exampleBtn = document.getElementById('exampleBtn');
const exampleModal = document.getElementById('exampleModal');
const exampleCloseBtn = exampleModal.querySelector('.close');

// Variables globales
let selectedFiles = [];

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    setupFileUpload();
});

function setupEventListeners() {
    // Envío del formulario
    form.addEventListener('submit', handleFormSubmit);
    
    // Vista previa
    previewBtn.addEventListener('click', showPreview);
    
    // Modal de vista previa
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Modal de ejemplo
    exampleBtn.addEventListener('click', showExampleModal);
    exampleCloseBtn.addEventListener('click', closeExampleModal);
    window.addEventListener('click', function(event) {
        if (event.target === exampleModal) {
            closeExampleModal();
        }
    });
    
    // Validación en tiempo real
    setupRealTimeValidation();
}

function setupFileUpload() {
    // Drag and drop
    const uploadContainer = document.querySelector('.file-upload-container');
    
    uploadContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadContainer.style.borderColor = '#667eea';
        uploadContainer.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
    });
    
    uploadContainer.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadContainer.style.borderColor = '#ddd';
        uploadContainer.style.backgroundColor = 'transparent';
    });
    
    uploadContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadContainer.style.borderColor = '#ddd';
        uploadContainer.style.backgroundColor = 'transparent';
        
        const files = Array.from(e.dataTransfer.files);
        handleFileSelection(files);
    });
    
    // Selección de archivos
    fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        handleFileSelection(files);
    });
}

function handleFileSelection(files) {
    const maxFiles = 5;
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (selectedFiles.length + files.length > maxFiles) {
        showNotification('Máximo 5 archivos permitidos', 'error');
        return;
    }
    
    files.forEach(file => {
        if (file.size > maxSize) {
            showNotification(`El archivo ${file.name} excede el tamaño máximo de 10MB`, 'error');
            return;
        }
        
        if (!selectedFiles.find(f => f.name === file.name)) {
            selectedFiles.push(file);
        }
    });
    
    updateFileList();
}

function updateFileList() {
    fileList.innerHTML = '';
    
    selectedFiles.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        
        const fileName = document.createElement('span');
        fileName.className = 'file-name';
        fileName.textContent = file.name;
        
        const fileSize = document.createElement('span');
        fileSize.className = 'file-size';
        fileSize.textContent = formatFileSize(file.size);
        
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '×';
        removeBtn.style.cssText = `
            background: #dc3545;
            color: white;
            border: none;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            cursor: pointer;
            font-size: 14px;
            margin-left: 10px;
        `;
        removeBtn.onclick = () => removeFile(index);
        
        fileItem.appendChild(fileName);
        fileItem.appendChild(fileSize);
        fileItem.appendChild(removeBtn);
        fileList.appendChild(fileItem);
    });
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    updateFileList();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function setupRealTimeValidation() {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remover errores previos
    clearFieldError(e);
    
    // Validaciones específicas
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Ingresa un email válido');
        return false;
    }
    
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Ingresa un teléfono válido');
        return false;
    }
    
    if (field.type === 'number' && value) {
        const num = parseInt(value);
        if (field.min && num < parseInt(field.min)) {
            showFieldError(field, `El valor mínimo es ${field.min}`);
            return false;
        }
        if (field.max && num > parseInt(field.max)) {
            showFieldError(field, `El valor máximo es ${field.max}`);
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, message) {
    field.style.borderColor = '#dc3545';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.8rem;
        margin-top: 5px;
    `;
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.style.borderColor = '#e1e5e9';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

function validateForm() {
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function showPreview() {
    if (!validateForm()) {
        showNotification('Por favor, corrige los errores en el formulario', 'error');
        return;
    }
    
    const formData = new FormData(form);
    let previewHTML = '<div class="preview-content">';
    
    // Información Personal
    previewHTML += '<h3>Información Personal</h3>';
    previewHTML += `<p><strong>Nombre:</strong> ${formData.get('nombre') || 'No especificado'}</p>`;
    previewHTML += `<p><strong>Email:</strong> ${formData.get('email') || 'No especificado'}</p>`;
    previewHTML += `<p><strong>Teléfono:</strong> ${formData.get('telefono') || 'No especificado'}</p>`;
    previewHTML += `<p><strong>Edad:</strong> ${formData.get('edad') || 'No especificado'}</p>`;
    previewHTML += `<p><strong>Género:</strong> ${formData.get('genero') || 'No especificado'}</p>`;
    
    // Intereses
    previewHTML += '<h3>Intereses</h3>';
    const intereses = formData.getAll('intereses');
    if (intereses.length > 0) {
        previewHTML += `<p><strong>Intereses:</strong> ${intereses.join(', ')}</p>`;
    } else {
        previewHTML += '<p><strong>Intereses:</strong> Ninguno seleccionado</p>';
    }
    
    previewHTML += `<p><strong>Fecha de Nacimiento:</strong> ${formData.get('fecha') || 'No especificado'}</p>`;
    
    // Comentarios
    previewHTML += '<h3>Comentarios</h3>';
    previewHTML += `<p><strong>Comentarios:</strong> ${formData.get('comentarios') || 'No especificado'}</p>`;
    
    // Archivos
    if (selectedFiles.length > 0) {
        previewHTML += '<h3>Archivos</h3>';
        previewHTML += '<ul>';
        selectedFiles.forEach(file => {
            previewHTML += `<li>${file.name} (${formatFileSize(file.size)})</li>`;
        });
        previewHTML += '</ul>';
    }
    
    previewHTML += '</div>';
    
    previewContent.innerHTML = previewHTML;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function showExampleModal() {
    exampleModal.style.display = 'block';
}

function closeExampleModal() {
    exampleModal.style.display = 'none';
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        showNotification('Por favor, corrige los errores en el formulario', 'error');
        return;
    }
    
    // Mostrar estado de carga
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    try {
        const formData = new FormData(form);
        
        // Agregar archivos seleccionados
        selectedFiles.forEach(file => {
            formData.append('files', file);
        });
        
        const response = await fetch('/submit-form', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification('¡Formulario enviado exitosamente!', 'success');
            form.reset();
            selectedFiles = [];
            updateFileList();
        } else {
            showNotification(result.message || 'Error al enviar el formulario', 'error');
        }
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('Error de conexión. Intenta nuevamente.', 'error');
    } finally {
        // Restaurar botón
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Formulario';
    }
}

function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// Función para obtener estadísticas (opcional)
async function getStats() {
    try {
        const response = await fetch('/stats');
        const stats = await response.json();
        console.log('Estadísticas:', stats);
    } catch (error) {
        console.error('Error al obtener estadísticas:', error);
    }
}

// Estilos adicionales para la vista previa
const previewStyles = `
    <style>
        .preview-content h3 {
            color: #667eea;
            margin: 20px 0 10px 0;
            border-bottom: 2px solid #667eea;
            padding-bottom: 5px;
        }
        .preview-content p {
            margin: 8px 0;
            line-height: 1.6;
        }
        .preview-content ul {
            margin: 10px 0;
            padding-left: 20px;
        }
        .preview-content li {
            margin: 5px 0;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', previewStyles); 