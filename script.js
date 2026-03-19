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
    
    // Seguridad: Si por alguna razón el HTML no ha cargado el div, esperamos 100ms más
    if (!contenedorTexto) {
        setTimeout(escribir, 100);
        return;
    }

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
    
    if (terminal && pagina) {
        terminal.style.display = "none";
        pagina.style.display = "flex"; 
        
        setTimeout(() => {
            pagina.style.opacity = "1";
            document.body.style.overflow = "auto";
        }, 50);
    }
}

// Asegurar el inicio si o si
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', escribir);
} else {
    escribir();
}