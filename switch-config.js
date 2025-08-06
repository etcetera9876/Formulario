#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const configs = {
    development: {
        source: 'config.public.js',
        target: 'config.public.js',
        description: 'Configuración con credenciales reales para desarrollo local'
    },
    production: {
        source: 'config.production.js',
        target: 'config.public.js',
        description: 'Configuración con placeholders para producción'
    }
};

const mode = process.argv[2];

if (!mode || !configs[mode]) {
    console.log('Uso: node switch-config.js [development|production]');
    console.log('');
    console.log('Modos disponibles:');
    console.log('  development - Usa credenciales reales para desarrollo local');
    console.log('  production  - Usa placeholders para despliegue público');
    process.exit(1);
}

const config = configs[mode];

try {
    // Leer el archivo fuente
    const sourceContent = fs.readFileSync(config.source, 'utf8');
    
    // Escribir al archivo objetivo
    fs.writeFileSync(config.target, sourceContent);
    
    console.log(`✅ Configuración cambiada a modo: ${mode}`);
    console.log(`📝 ${config.description}`);
    console.log(`📁 Archivo actualizado: ${config.target}`);
    
} catch (error) {
    console.error('❌ Error cambiando configuración:', error.message);
    process.exit(1);
} 