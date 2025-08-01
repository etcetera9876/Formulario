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
const ejemploBtn = document.getElementById('ejemploBtn');
const ejemploModal = document.getElementById('ejemploModal');
const closeEjemploBtn = document.getElementById('closeEjemplo');

// Elementos de los nuevos modales
const ciudadEjemploBtn = document.getElementById('ciudadEjemploBtn');
const ciudadEjemploModal = document.getElementById('ciudadEjemploModal');
const closeCiudadEjemploBtn = document.getElementById('closeCiudadEjemplo');

// Variables globales
let selectedFiles = [];

// Lista dinámica de ciudades (se actualiza automáticamente)
let ciudadesList = [
    'Union City', 'North Bergen', 'Secaucus', 'Jersey City', 'Hoboken',
    'Bayonne', 'West New York', 'Weehawken', 'Guttenberg', 'Kearny',
    'Harrison', 'Newark', 'Elizabeth', 'Paterson', 'Clifton',
    'Passaic', 'Hackensack', 'Paramus', 'Ridgewood', 'Teaneck',
    'Fort Lee', 'Englewood', 'Bergenfield', 'Dumont', 'New Milford',
    'River Edge', 'Oradell', 'Emerson', 'Westwood', 'Hillsdale',
    'Park Ridge', 'Woodcliff Lake', 'Montvale', 'Old Tappan', 'Norwood',
    'Northvale', 'Harrington Park', 'Closter', 'Alpine', 'Tenafly',
    'Cresskill', 'Demarest', 'Haworth'
];

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    setupFileUpload();
    
    // NO validar campos automáticamente al cargar la página
    // Los errores solo aparecerán al intentar enviar el formulario
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
    ejemploBtn.addEventListener('click', showEjemploModal);
    closeEjemploBtn.addEventListener('click', closeEjemploModal);
    window.addEventListener('click', function(event) {
        if (event.target === ejemploModal) {
            closeEjemploModal();
        }
    });

    // Modal de ejemplo de ciudad
    ciudadEjemploBtn.addEventListener('click', showCiudadEjemploModal);
    closeCiudadEjemploBtn.addEventListener('click', closeCiudadEjemploModal);
    window.addEventListener('click', function(event) {
        if (event.target === ciudadEjemploModal) {
            closeCiudadEjemploModal();
        }
    });
    

    
    // Configurar funcionalidades especiales de los campos
    setupSpecialFieldFeatures();
    
    // Configurar funcionalidad del campo de ciudad
    setupCiudadField();
    
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

function setupSpecialFieldFeatures() {
    // 1. Auto-capitalización para nombre completo
    const nombreInput = document.getElementById('nombre');
    if (nombreInput) {
        nombreInput.addEventListener('input', function(e) {
            const value = e.target.value;
            const capitalized = value.replace(/\b\w/g, l => l.toUpperCase());
            if (value !== capitalized) {
                e.target.value = capitalized;
            }
        });
    }
    
    // 2. Sugerencias de email
    const emailInput = document.getElementById('email');
    if (emailInput) {
        setupEmailSuggestions(emailInput);
    }
    
    // 3. Formato de teléfono
    const telefonoInput = document.getElementById('telefono');
    if (telefonoInput) {
        setupPhoneFormatting(telefonoInput);
    }
    
    // 4. Date picker personalizado
    setupDatePicker();
}

function setupEmailSuggestions(emailInput) {
    const commonDomains = [
        '@gmail.com', '@hotmail.com', '@outlook.com', '@yahoo.com',
        '@icloud.com', '@live.com', '@msn.com', '@aol.com',
        '@protonmail.com', '@yandex.com', '@mail.com'
    ];
    
    emailInput.addEventListener('input', function(e) {
        const value = e.target.value;
        
        // Remover sugerencias anteriores
        const existingSuggestions = document.querySelector('.email-suggestions');
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
        
        // Verificar si el usuario está escribiendo un email
        if (value.includes('@')) {
            const [localPart, domain] = value.split('@');
            if (localPart && !domain) {
                // Mostrar sugerencias
                showEmailSuggestions(emailInput, localPart, commonDomains);
            }
        }
    });
    
    // Agregar evento para remover sugerencias cuando se hace click fuera
    document.addEventListener('click', function(e) {
        if (!emailInput.contains(e.target) && !e.target.closest('.email-suggestions')) {
            const existingSuggestions = document.querySelector('.email-suggestions');
            if (existingSuggestions) {
                existingSuggestions.remove();
            }
        }
    });
}

function showEmailSuggestions(emailInput, localPart, domains) {
    // Crear contenedor de sugerencias
    const suggestionDiv = document.createElement('div');
    suggestionDiv.className = 'email-suggestions';
    
    // Crear sugerencias
    domains.forEach(domain => {
        const suggestion = document.createElement('div');
        suggestion.className = 'email-suggestion';
        suggestion.textContent = localPart + domain;
        
        // Usar mousedown en lugar de click para evitar conflictos
        suggestion.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Establecer el valor del email inmediatamente
            emailInput.value = this.textContent;
            
            // Remover las sugerencias inmediatamente
            suggestionDiv.remove();
            
            // Limpiar cualquier error existente
            clearFieldError({ target: emailInput });
            
            // Restaurar estilos del campo
            emailInput.style.borderColor = '#e1e5e9';
            emailInput.style.boxShadow = 'none';
            
            // Hacer focus en el campo después de un pequeño delay
            setTimeout(() => {
                emailInput.focus();
            }, 10);
        });
        
        suggestionDiv.appendChild(suggestion);
    });
    
    // Posicionar y mostrar sugerencias
    emailInput.parentNode.style.position = 'relative';
    emailInput.parentNode.appendChild(suggestionDiv);
}

function setupPhoneFormatting(phoneInput) {
    // Agregar placeholder con formato
    phoneInput.placeholder = '(555) 123-4567';
    
    // Agregar advertencia sobre códigos de país
    const warningDiv = document.createElement('div');
    warningDiv.className = 'phone-warning';
    warningDiv.innerHTML = '<i class="fas fa-info-circle"></i> No incluir código de país (+1, +52, etc.)';
    warningDiv.style.cssText = `
        font-size: 0.8rem;
        color: #666;
        margin-top: 4px;
        display: flex;
        align-items: center;
        gap: 4px;
    `;
    
    phoneInput.parentNode.appendChild(warningDiv);
    
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Solo números
        
        // Limitar a 10 dígitos
        if (value.length > 10) {
            value = value.substring(0, 10);
        }
        
        // Aplicar formato
        let formatted = '';
        if (value.length > 0) {
            if (value.length <= 3) {
                formatted = `(${value}`;
            } else if (value.length <= 6) {
                formatted = `(${value.substring(0, 3)}) ${value.substring(3)}`;
            } else {
                formatted = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
            }
        }
        
        e.target.value = formatted;
    });
    
    // Prevenir entrada de caracteres no numéricos
    phoneInput.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/\d/.test(char)) {
            e.preventDefault();
        }
    });
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
    
    // Si el campo está vacío, no mostrar error en tiempo real
    if (!value) {
        return true;
    }
    
    // Validar email
    if (field.type === 'email' && value) {
        if (!isValidEmail(value)) {
            // Solo mostrar error si el usuario ha terminado de escribir (blur) o si es muy obvio que está mal
            if (e.type === 'blur' || (!value.includes('@') || !value.includes('.'))) {
                showFieldError(field, 'Ingresa un email válido');
                return false;
            }
        }
    }
    
    // Validar teléfono
    if (field.type === 'tel' && value) {
        if (!isValidPhone(value)) {
            // Solo mostrar error en blur o si es muy obvio que está mal
            if (e.type === 'blur' || value.replace(/\D/g, '').length < 7) {
                showFieldError(field, 'Ingresa un teléfono válido');
                return false;
            }
        }
    }
    
    // Validar números
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

// Función para validar campos obligatorios (solo al enviar)
function validateRequiredFields() {
    const requiredFields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let hasErrors = false;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'Este campo es obligatorio');
            hasErrors = true;
        }
    });
    
    return !hasErrors;
}

function showFieldError(field, message) {
    field.style.borderColor = '#dc3545';
    field.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.85rem;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(220, 53, 69, 0.05);
        border: 1px solid rgba(220, 53, 69, 0.2);
        border-radius: 6px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
    `;
    
    // Agregar ícono de error
    const errorIcon = document.createElement('i');
    errorIcon.className = 'fas fa-exclamation-circle';
    errorIcon.style.fontSize = '0.9rem';
    
    errorDiv.appendChild(errorIcon);
    errorDiv.appendChild(document.createTextNode(message));
    
    // Si el campo está dentro de input-with-button, insertar después del contenedor
    const inputContainer = field.closest('.input-with-button');
    if (inputContainer) {
        inputContainer.parentNode.insertBefore(errorDiv, inputContainer.nextSibling);
    } else {
        field.parentNode.appendChild(errorDiv);
    }
}

function clearFieldError(e) {
    const field = e.target;
    
    // Restaurar estilos del campo
    field.style.borderColor = '#e1e5e9';
    field.style.boxShadow = 'none';
    
    // Buscar y remover todos los errores relacionados con este campo
    const inputContainer = field.closest('.input-with-button');
    const searchContainer = inputContainer ? inputContainer.parentNode : field.parentNode;
    
    // Buscar errores en el contenedor específico
    const errorDiv = searchContainer.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
    
    // También buscar en el contenedor padre por si acaso
    const parentErrorDiv = field.parentNode.querySelector('.field-error');
    if (parentErrorDiv) {
        parentErrorDiv.remove();
    }
    
    // Buscar en todo el formulario por errores de este campo específico
    const allErrors = form.querySelectorAll('.field-error');
    allErrors.forEach(error => {
        // Si el error está relacionado con este campo, removerlo
        const fieldName = field.name || field.id;
        if (error.textContent.includes('email') && fieldName === 'email') {
            error.remove();
        } else if (error.textContent.includes('teléfono') && fieldName === 'telefono') {
            error.remove();
        } else if (error.textContent.includes('nombre') && fieldName === 'nombre') {
            error.remove();
        }
    });
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
    
    // Limpiar todos los errores previos
    inputs.forEach(input => {
        clearFieldError({ target: input });
    });
    
    // Primero validar campos obligatorios
    if (!validateRequiredFields()) {
        isValid = false;
    }
    
    // Luego validar formato de campos con contenido
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    // Si hay errores, hacer scroll al primer error
    if (!isValid) {
        const firstError = form.querySelector('.field-error');
        if (firstError) {
            firstError.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }
    
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
    previewHTML += `<p><strong>Fecha de Nacimiento:</strong> ${formData.get('fechaNacimiento') || 'No especificado'}</p>`;
    
    // Ciudad
    const ciudad = formData.get('ciudad');
    const otraCiudad = formData.get('otraCiudad');
    if (ciudad === 'Otra' && otraCiudad) {
        previewHTML += `<p><strong>Ciudad:</strong> ${otraCiudad}</p>`;
    } else if (ciudad) {
        previewHTML += `<p><strong>Ciudad:</strong> ${ciudad}</p>`;
    } else {
        previewHTML += `<p><strong>Ciudad:</strong> No especificado</p>`;
    }
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

function showEjemploModal() {
    ejemploModal.style.display = 'block';
    // Agregar animación de entrada
    const modalContent = ejemploModal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease-out';
}

function closeEjemploModal() {
    ejemploModal.style.display = 'none';
}

function showCiudadEjemploModal() {
    ciudadEjemploModal.style.display = 'block';
    const modalContent = ciudadEjemploModal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease-out';
}

function closeCiudadEjemploModal() {
    ciudadEjemploModal.style.display = 'none';
}





async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        showNotification('Por favor, corrige los errores en el formulario', 'error');
        return;
    }
    
    // Verificar si hay una nueva ciudad para agregar
    const ciudadSelect = document.getElementById('ciudad');
    const otraCiudadInput = document.getElementById('otraCiudad');
    
    if (ciudadSelect.value === 'Otra' && otraCiudadInput.value.trim()) {
        const newCity = otraCiudadInput.value.trim();
        const wasAdded = addNewCity(newCity);
        
        if (wasAdded) {
            showNotification(`Nueva ciudad agregada: ${normalizeCityName(newCity)}`, 'success');
        }
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

function setupDatePicker() {
    const dateInput = document.getElementById('fechaNacimiento');
    const datePickerModal = document.getElementById('datePickerModal');
    const yearSelector = document.getElementById('yearSelector');
    const monthSelector = document.getElementById('monthSelector');
    const daySelector = document.getElementById('daySelector');
    const currentYearSpan = document.getElementById('currentYear');
    const prevYearBtn = document.getElementById('prevYear');
    const nextYearBtn = document.getElementById('nextYear');
    const cancelBtn = document.getElementById('cancelDate');
    
    let currentYear = new Date().getFullYear();
    let selectedYear = null;
    let selectedMonth = null;
    let selectedDay = null;
    
    const months = [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];
    
    // Mostrar modal al hacer click en el campo
    dateInput.addEventListener('click', function() {
        datePickerModal.style.display = 'block';
        showYearSelector();
    });
    
    // Cerrar modal al hacer click fuera
    datePickerModal.addEventListener('click', function(e) {
        if (e.target === datePickerModal) {
            closeDatePicker();
        }
    });
    
    // Navegación de años
    prevYearBtn.addEventListener('click', function() {
        currentYear -= 10;
        showYearSelector();
    });
    
    nextYearBtn.addEventListener('click', function() {
        currentYear += 10;
        showYearSelector();
    });
    
    // Botón de cancelar
    cancelBtn.addEventListener('click', closeDatePicker);
    
    function showYearSelector() {
        currentYearSpan.textContent = `${currentYear - 5} - ${currentYear + 4}`;
        yearSelector.style.display = 'grid';
        monthSelector.style.display = 'none';
        daySelector.style.display = 'none';
        
        yearSelector.innerHTML = '';
        
        for (let year = currentYear - 5; year <= currentYear + 4; year++) {
            const yearItem = document.createElement('div');
            yearItem.className = 'year-item';
            yearItem.textContent = year;
            yearItem.addEventListener('click', function() {
                selectedYear = year;
                showMonthSelector();
            });
            yearSelector.appendChild(yearItem);
        }
    }
    
    function showMonthSelector() {
        currentYearSpan.textContent = selectedYear;
        yearSelector.style.display = 'none';
        monthSelector.style.display = 'grid';
        daySelector.style.display = 'none';
        
        monthSelector.innerHTML = '';
        
        months.forEach((month, index) => {
            const monthItem = document.createElement('div');
            monthItem.className = 'month-item';
            monthItem.textContent = month;
            monthItem.addEventListener('click', function() {
                selectedMonth = index + 1;
                showDaySelector();
            });
            monthSelector.appendChild(monthItem);
        });
    }
    
    function showDaySelector() {
        currentYearSpan.textContent = `${months[selectedMonth - 1]} ${selectedYear}`;
        yearSelector.style.display = 'none';
        monthSelector.style.display = 'none';
        daySelector.style.display = 'grid';
        
        daySelector.innerHTML = '';
        
        const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dayItem = document.createElement('div');
            dayItem.className = 'day-item';
            dayItem.textContent = day;
            dayItem.addEventListener('click', function() {
                selectedDay = day;
                confirmDate(); // Confirmar automáticamente al seleccionar día
            });
            daySelector.appendChild(dayItem);
        }
    }
    
    function highlightSelectedDay() {
        const dayItems = daySelector.querySelectorAll('.day-item');
        dayItems.forEach(item => item.classList.remove('selected'));
        
        const selectedItem = daySelector.querySelector(`[data-day="${selectedDay}"]`);
        if (selectedItem) {
            selectedItem.classList.add('selected');
        }
    }
    
    function confirmDate() {
        if (selectedYear && selectedMonth && selectedDay) {
            const date = new Date(selectedYear, selectedMonth - 1, selectedDay);
            const formattedDate = `${(selectedMonth).toString().padStart(2, '0')}/${selectedDay.toString().padStart(2, '0')}/${selectedYear}`;
            
            dateInput.value = formattedDate;
            closeDatePicker();
        }
    }
    
    function closeDatePicker() {
        datePickerModal.style.display = 'none';
        selectedYear = null;
        selectedMonth = null;
        selectedDay = null;
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

function setupCiudadField() {
    const ciudadSelect = document.getElementById('ciudad');
    const otraCiudadContainer = document.getElementById('otraCiudadContainer');
    const otraCiudadInput = document.getElementById('otraCiudad');
    
    ciudadSelect.addEventListener('change', function() {
        if (this.value === 'Otra') {
            otraCiudadContainer.style.display = 'block';
            otraCiudadInput.required = true;
        } else {
            otraCiudadContainer.style.display = 'none';
            otraCiudadInput.required = false;
            otraCiudadInput.value = '';
        }
    });
    
    // Validación inteligente del campo "otra ciudad"
    otraCiudadInput.addEventListener('input', function() {
        const value = this.value.trim();
        
        // Validar longitud máxima
        if (value.length > 40) {
            this.value = value.substring(0, 40);
            showNotification('Máximo 40 caracteres permitidos', 'error');
            return;
        }
        
        // Validar caracteres especiales (solo letras, espacios y guiones)
        const cleanValue = value.replace(/[^a-zA-Z\s\-]/g, '');
        if (cleanValue !== value) {
            this.value = cleanValue;
            showNotification('Solo se permiten letras, espacios y guiones', 'error');
            return;
        }
    });
    
    // Validación al perder el foco
    otraCiudadInput.addEventListener('blur', function() {
        const value = this.value.trim();
        if (value) {
            const normalizedValue = normalizeCityName(value);
            const existingCity = findExistingCity(normalizedValue);
            
            if (existingCity) {
                // Si la ciudad ya existe, seleccionarla automáticamente
                ciudadSelect.value = existingCity;
                otraCiudadContainer.style.display = 'none';
                otraCiudadInput.required = false;
                otraCiudadInput.value = '';
                showNotification(`Ciudad encontrada: ${existingCity}`, 'success');
            } else {
                // Normalizar el nombre de la ciudad
                this.value = normalizedValue;
            }
        }
    });
}

// Función para normalizar nombres de ciudades
function normalizeCityName(cityName) {
    return cityName
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Función para buscar ciudad existente (case-insensitive)
function findExistingCity(cityName) {
    const normalizedInput = cityName.toLowerCase();
    return ciudadesList.find(city => city.toLowerCase() === normalizedInput);
}

// Función para agregar nueva ciudad a la lista
function addNewCity(cityName) {
    const normalizedCity = normalizeCityName(cityName);
    
    // Verificar si ya existe
    if (!findExistingCity(normalizedCity)) {
        ciudadesList.push(normalizedCity);
        updateCiudadSelect();
        console.log(`Nueva ciudad agregada: ${normalizedCity}`);
        return true;
    }
    return false;
}

// Función para actualizar el select de ciudades
function updateCiudadSelect() {
    const ciudadSelect = document.getElementById('ciudad');
    const currentValue = ciudadSelect.value;
    
    // Guardar las opciones existentes excepto "Otra"
    const options = Array.from(ciudadSelect.options);
    const otraOption = options.find(option => option.value === 'Otra');
    
    // Limpiar el select
    ciudadSelect.innerHTML = '';
    
    // Agregar opción por defecto
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecciona tu ciudad';
    ciudadSelect.appendChild(defaultOption);
    
    // Agregar ciudades ordenadas alfabéticamente
    ciudadesList.sort().forEach(ciudad => {
        const option = document.createElement('option');
        option.value = ciudad;
        option.textContent = `${ciudad}, NJ`;
        ciudadSelect.appendChild(option);
    });
    
    // Agregar opción "Otra" al final
    if (otraOption) {
        ciudadSelect.appendChild(otraOption);
    }
    
    // Restaurar valor seleccionado si aún existe
    if (currentValue && ciudadesList.includes(currentValue)) {
        ciudadSelect.value = currentValue;
    }
} 