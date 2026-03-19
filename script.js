const nombresDeArchivos = [
    "PHOTO-2026-03-19-12-05-09 2.jpg", "PHOTO-2026-03-19-12-05-09.jpg",
    "PHOTO-2026-03-19-12-05-10 2.jpg", "PHOTO-2026-03-19-12-05-10 3.jpg", 
    "PHOTO-2026-03-19-12-05-10 4.jpg", "PHOTO-2026-03-19-12-05-10 5.jpg", 
    "PHOTO-2026-03-19-12-05-10 6.jpg", "PHOTO-2026-03-19-12-05-10 7.jpg", 
    "PHOTO-2026-03-19-12-05-10 8.jpg", "PHOTO-2026-03-19-12-05-10.jpg",
    "PHOTO-2026-03-19-12-05-11 2.jpg", "PHOTO-2026-03-19-12-05-11 3.jpg", 
    "PHOTO-2026-03-19-12-05-11.jpg", "PHOTO-2026-03-19-12-05-12 2.jpg", 
    "PHOTO-2026-03-19-12-05-12 3.jpg", "PHOTO-2026-03-19-12-05-12 4.jpg", 
    "PHOTO-2026-03-19-12-05-12 5.jpg", "PHOTO-2026-03-19-12-05-12 6.jpg", 
    "PHOTO-2026-03-19-12-05-12.jpg", "PHOTO-2026-03-19-12-05-13 2.jpg", 
    "PHOTO-2026-03-19-12-05-13 3.jpg", "PHOTO-2026-03-19-12-05-13 4.jpg", 
    "PHOTO-2026-03-19-12-05-13 5.jpg", "PHOTO-2026-03-19-12-05-13 6.jpg", 
    "PHOTO-2026-03-19-12-05-13.jpg", "PHOTO-2026-03-19-12-05-14 2.jpg", 
    "PHOTO-2026-03-19-12-05-14 3.jpg", "PHOTO-2026-03-19-12-05-14 4.jpg", 
    "PHOTO-2026-03-19-12-05-14 5.jpg", "PHOTO-2026-03-19-12-05-14 6.jpg", 
    "PHOTO-2026-03-19-12-05-14.jpg", "PHOTO-2026-03-19-12-05-15 2.jpg", 
    "PHOTO-2026-03-19-12-05-15 3.jpg", "PHOTO-2026-03-19-12-05-15 4.jpg", 
    "PHOTO-2026-03-19-12-05-15 5.jpg", "PHOTO-2026-03-19-12-05-15 6.jpg", 
    "PHOTO-2026-03-19-12-05-15 7.jpg", "PHOTO-2026-03-19-12-05-15 8.jpg", 
    "PHOTO-2026-03-19-12-05-15 9.jpg", "PHOTO-2026-03-19-12-05-15.jpg",
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
    "PHOTO-2026-03-19-12-05-18.jpg", "PHOTO-2026-03-19-12-05-19 2.jpg", 
    "PHOTO-2026-03-19-12-05-19 3.jpg", "PHOTO-2026-03-19-12-05-19 4.jpg", 
    "PHOTO-2026-03-19-12-05-19.jpg"
];

const textoDedicatoria = "Papá, estas fotos son solo una pequeña muestra de la suerte que tengo de tenerte. Gracias por cada consejo, por cada risa y por estar siempre ahí. Eres nuestro ejemplo a seguir. ¡Te queremos muchísimo!";

const terminalLineas = [
    "user@papa:~$ sudo ./open_heart.sh",
    "> Sincronizando recuerdos...",
    "> Perfeccionando márgenes finales...",
    "> Todo listo. Disfruta el viaje."
];

let linea = 0, letra = 0;
const contenedorTerminal = document.getElementById("texto-terminal");

function escribirTerminal() {
    if (linea < terminalLineas.length) {
        if (letra < terminalLineas[linea].length) {
            contenedorTerminal.innerHTML += terminalLineas[linea].charAt(letra);
            letra++;
            setTimeout(escribirTerminal, 25);
        } else {
            contenedorTerminal.innerHTML += "<br>";
            linea++; letra = 0;
            setTimeout(escribirTerminal, 400);
        }
    } else {
        mostrarBarra();
    }
}

function mostrarBarra() {
    document.getElementById("container-barra").style.display = "block";
    let prog = 0;
    const barra = document.getElementById("progreso");
    const intv = setInterval(() => {
        prog += 2;
        if (prog >= 100) {
            prog = 100; clearInterval(intv);
            document.getElementById("btnIniciar").style.display = "block";
        }
        barra.style.width = prog + "%";
        document.getElementById("porcentaje").innerText = prog + "%";
    }, 40);
}

document.getElementById("btnIniciar").addEventListener("click", () => {
    document.getElementById("musica").play();
    document.getElementById("seccion-terminal").style.display = "none";
    document.getElementById("pagina").style.display = "flex";
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    generarFotos();
});

function generarFotos() {
    const galeria = document.getElementById("galeria");
    const contenedorScroll = document.getElementById("contenedor-scroll");

    // Función interna para cargar una sola foto
    function cargarFotoIndividual(index) {
        if (index >= nombresDeArchivos.length) {
            // Si ya no hay más fotos, lanzamos la dedicatoria
            setTimeout(escribirDedicatoria, 4000);
            return;
        }

        const nombre = nombresDeArchivos[index];
        const div = document.createElement("div");
        div.className = "foto-item";
        div.style.setProperty('--r', `${(Math.random() * 6 - 3)}deg`);
        
        const img = document.createElement("img");
        
        img.onload = () => {
            // Solo cuando la imagen está LISTA la metemos en el HTML
            galeria.appendChild(div);
            div.appendChild(img);
            
            // Forzamos un micro-segundo para que el navegador la pinte
            setTimeout(() => {
                div.classList.add("aparecer");
                const offset = div.offsetTop - 220; 
                contenedorScroll.scrollTo({ top: offset, behavior: 'smooth' });
                
                // ESPERAMOS el tiempo exacto antes de llamar a la siguiente foto
                setTimeout(() => {
                    cargarFotoIndividual(index + 1);
                }, 2222); 
            }, 50);
        };

        // Si una foto falla, que pase a la siguiente para no bloquear todo
        img.onerror = () => {
            console.error("Error cargando: " + nombre);
            cargarFotoIndividual(index + 1);
        };

        img.src = `./assets/${nombre}`;
    }

    // Arrancamos la primera foto tras 1 segundo
    setTimeout(() => {
        cargarFotoIndividual(0);
    }, 1000);
}

let letraDedi = 0;
function escribirDedicatoria() {
    const contenedorDedi = document.getElementById("dedicatoria");
    const contenedorScroll = document.getElementById("contenedor-scroll");
    
    if (letraDedi < textoDedicatoria.length) {
        contenedorDedi.innerHTML += textoDedicatoria.charAt(letraDedi);
        letraDedi++;
        contenedorScroll.scrollTo({ top: contenedorScroll.scrollHeight, behavior: 'smooth' });
        setTimeout(escribirDedicatoria, 70);
    } else {
        confetti({ particleCount: 300, spread: 150, origin: { y: 0.8 } });
    }
}

escribirTerminal();
