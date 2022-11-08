// Importar Módulo
const child_process = require('child_process');

// Ejecutar child_process.exec con nombre de archivo, y argumentos
child_process.exec(`node index.js cotizacion1 txt dolar 250000`,(error,stdout) => {
    if(error) {
        console.log(`exec error: ${error}`);
        return;
    }

    // Devolviendo contenido del archivo por consola
    console.log(`Resultado: ${stdout}`);
});