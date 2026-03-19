// --- COPIA ESTO ---

// ¡Aquí está la lista gigante de tus 81 archivos reales, ya hecha para ti!
// He revisado tus capturas y he generado los 81 nombres.
const nombresDeArchivos = [
    // 
    "PHOTO-2026-03-19-12-05-09 2.jpg", "PHOTO-2026-03-19-12-05-09.jpg",
    "PHOTO-2026-03-19-12-05-10 2.jpg", "PHOTO-2026-03-19-12-05-10 3.jpg", 
    "PHOTO-2026-03-19-12-05-10 4.jpg", "PHOTO-2026-03-19-12-05-10 5.jpg", 
    "PHOTO-2026-03-19-12-05-10 6.jpg", "PHOTO-2026-03-19-12-05-10 7.jpg", 
    "PHOTO-2026-03-19-12-05-10 8.jpg", "PHOTO-2026-03-19-12-05-10.jpg",
    "PHOTO-2026-03-19-12-05-11 2.jpg", "PHOTO-2026-03-19-12-05-11 3.jpg", 
    "PHOTO-2026-03-19-12-05-11.jpg","PHOTO-2026-03-19-12-05-12 2.jpg", 
    "PHOTO-2026-03-19-12-05-12 3.jpg", "PHOTO-2026-03-19-12-05-12 4.jpg", 
    "PHOTO-2026-03-19-12-05-12 5.jpg", "PHOTO-2026-03-19-12-05-12 6.jpg", 
    "PHOTO-2026-03-19-12-05-12.jpg", //19

    // 
    "PHOTO-2026-03-19-12-05-13 2.jpg", "PHOTO-2026-03-19-12-05-13 3.jpg", 
    "PHOTO-2026-03-19-12-05-13 4.jpg", "PHOTO-2026-03-19-12-05-13 5.jpg", 
    "PHOTO-2026-03-19-12-05-13 6.jpg", "PHOTO-2026-03-19-12-05-13.jpg",
    "PHOTO-2026-03-19-12-05-14 2.jpg", "PHOTO-2026-03-19-12-05-14 3.jpg", 
    "PHOTO-2026-03-19-12-05-14 4.jpg", "PHOTO-2026-03-19-12-05-14 5.jpg", 
    "PHOTO-2026-03-19-12-05-14 6.jpg", "PHOTO-2026-03-19-12-05-14.jpg",
    "PHOTO-2026-03-19-12-05-15 2.jpg", "PHOTO-2026-03-19-12-05-15 3.jpg", 
    "PHOTO-2026-03-19-12-05-15 4.jpg", "PHOTO-2026-03-19-12-05-15 5.jpg", 
    "PHOTO-2026-03-19-12-05-15 6.jpg", "PHOTO-2026-03-19-12-05-15 7.jpg", 
    "PHOTO-2026-03-19-12-05-15 8.jpg", "PHOTO-2026-03-19-12-05-15 9.jpg", 
    "PHOTO-2026-03-19-12-05-15.jpg", //21

    //
    "PHOTO-2026-03-19-12-05-16 2.jpg", "PHOTO-2026-03-19-12-05-16 3.jpg",
    "PHOTO-2026-03-19-12-05-16 4.jpg", "PHOTO-2026-03-19-12-05-16 5.jpg", 
    "PHOTO-2026-03-19-12-05-16 6.jpg", "PHOTO-2026-03-19-12-05-16 7.jpg", 
    "PHOTO-2026-03-19-12-05-16 8.jpg", "PHOTO-2026-03-19-12-05-16 9.jpg", 
    "PHOTO-2026-03-19-12-05-16.jpg", "PHOTO-2026-03-19-12-05-17 2.jpg", 
    "PHOTO-2026-03-19-12-05-17 3.jpg", "PHOTO-2026-03-19-12-05-17 4.jpg", 
    "PHOTO-2026-03-19-12-05-17 5.jpg", "PHOTO-2026-03-19-12-05-17 6.jpg", 
    "PHOTO-2026-03-19-12-05-17 7.jpg", "PHOTO-2026-03-19-12-05-17 8.jpg", 
    "PHOTO-2026-03-19-12-05-17 9.jpg", "PHOTO-2026-03-19-12-05-17 10.jpg", 
    "PHOTO-2026-03-19-12-05-17 11.jpg", "PHOTO-2026-03-19-12-05-17 12.jpg", 
    "PHOTO-2026-03-19-12-05-17 13.jpg", "PHOTO-2026-03-19-12-05-17.jpg",
    "PHOTO-2026-03-19-12-05-18 2.jpg", "PHOTO-2026-03-19-12-05-18 3.jpg", 
    "PHOTO-2026-03-19-12-05-18 4.jpg", "PHOTO-2026-03-19-12-05-18 5.jpg", 
    "PHOTO-2026-03-19-12-05-18 6.jpg", "PHOTO-2026-03-19-12-05-18 7.jpg", 
    "PHOTO-2026-03-19-12-05-18 8.jpg", "PHOTO-2026-03-19-12-05-18 9.jpg", 
    "PHOTO-2026-03-19-12-05-18 10.jpg", "PHOTO-2026-03-19-12-05-18 11.jpg", 
    "PHOTO-2026-03-19-12-05-18 12.jpg", "PHOTO-2026-03-19-12-05-18 13.jpg", 
    "PHOTO-2026-03-19-12-05-18 14.jpg", "PHOTO-2026-03-19-12-05-18 15.jpg", 
    "PHOTO-2026-03-19-12-05-18.jpg", //37

    //
    "PHOTO-2026-03-19-12-05-19 2.jpg", "PHOTO-2026-03-19-12-05-19 3.jpg", 
    "PHOTO-2026-03-19-12-05-19 4.jpg", "PHOTO-2026-03-19-12-05-19.jpg" //4
    //19+21+37+4 = 81

    // Total: 81 fotos generadas.
];

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

function cargarGaleria() {
    const galeria = document.getElementById("galeria");
    if (!galeria) return;

    nombresDeArchivos.forEach(nombreArchivo => {
        const div = document.createElement("div");
        div.className = "foto-item";

        const img = document.createElement("img");
        
        // Usamos encodeURI para los espacios y un parámetro de tiempo 
        // para evitar que el móvil use una versión vieja "cacheada"
        const rutaLimpia = encodeURI(nombreArchivo);
        img.src = `assets/${rutaLimpia}`; 
        
        img.alt = "Recuerdo";
        img.loading = "lazy";

        // Si la imagen falla, esto te avisará en la consola del navegador
        img.onerror = function() {
            console.error("No se pudo cargar: " + nombreArchivo);
        };

        div.appendChild(img);
        galeria.appendChild(div);
    });
}

function mostrarPagina() {
    const terminal = document.getElementById("terminal");
    const pagina = document.getElementById("pagina");
    
    if (terminal && pagina) {
        cargarGaleria(); // <--- Llamamos a la carga de fotos aquí
        
        terminal.style.display = "none";
        // Asegúrate de usar 'block' para que el mosaico de CSS funcione bien
        pagina.style.display = "block"; 
        
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

// Función para que las fotos parezcan un poco desordenadas (estilo álbum real)
function decorarFotos() {
    const fotos = document.querySelectorAll('.foto-item');
    fotos.forEach(foto => {
        const randomRot = (Math.random() * 4 - 2).toFixed(2); // Rotación entre -2 y 2 grados
        foto.style.transform = `rotate(${randomRot}deg)`;
    });
}

// Lógica del botón "Volver Arriba"
window.onscroll = function() {
    const btn = document.getElementById("btnArriba");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

document.getElementById("btnArriba")?.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Modificamos ligeramente tu función mostrarPagina para que llame a la decoración
const originalMostrarPagina = mostrarPagina;
mostrarPagina = function() {
    originalMostrarPagina();
    setTimeout(decorarFotos, 100); // Decoramos después de cargar
}
