const mensaje = [
    "> Ejecutando programa...",
    "> Cargando recuerdos...",
    "> Analizando...",
    "",
    "> Resultado:",
    "> El mejor padre del mundo."
];

let linea = 0;
let letra = 0;

function escribir() {
    const contenedorTexto = document.getElementById("texto");
    
    // Seguridad: Si no encuentra el elemento, se detiene para no dar error
    if (!contenedorTexto) return;

    if (linea < mensaje.length) {
        if (letra < mensaje[linea].length) {
            contenedorTexto.innerHTML += mensaje[linea].charAt(letra);
            letra++;
            setTimeout(escribir, 40);
        } else {
            contenedorTexto.innerHTML += "<br>";
            linea++;
            letra = 0;
            setTimeout(escribir, 500);
        }
    } else {
        setTimeout(mostrarPagina, 1500);
    }
}

function mostrarPagina() {
    const terminal = document.getElementById("terminal");
    const pagina = document.getElementById("pagina");
    
    // Comprobamos que ambos existan antes de hacer nada
    if (terminal && pagina) {
        terminal.style.display = "none";
        pagina.style.display = "flex"; 
        
        setTimeout(() => {
            pagina.style.opacity = "1";
            document.body.style.overflow = "auto";
        }, 50);
    }
}

// Usamos DOMContentLoaded en lugar de window.onload
// Esto espera a que el HTML esté procesado pero no a que carguen todas las fotos pesadas
document.addEventListener("DOMContentLoaded", () => {
    escribir();
});