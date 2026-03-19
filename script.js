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

const textoDedicatoria = "Papá, no sabes como me gustaría poder darte mucho más que esto, pero... Quiero que sepas que estas fotos son solo una pequeña muestra del amor que te tenemos y lo afortunado que me siento de tenerte a mi lado. Gracias por cada consejo, por cada risa, por cada lección, por acompañarme a mis aficiones desde siempre, por apoyarme no solo moral sino económicamente en todo aquello que persigo, por invitarme a comer, por tomarnos algo de beber, por ser como eres..., por cada regañina que sé que no siempre será lo que quiera, pero sí lo que necesite; y por estar siempre ahí. Eres nuestro ejemplo a seguir, mi orgullo, y mi inspiración a poder ser algún día como tú. Creeme cuando yo, Dylan, digo que lo que más deseo por encima de todo es la felicidad de mi familia, y que algún día puedas sentirte orgulloso del bebé que criaste... A palos y gritos, pero bien criado. Eres junto a Mamá e Izan, mi mejor amigo, mi padre, mi confidente... ¡Te queremos muchísimo!";

const terminalLineas = [
    "user@papa:~$ sudo ./abriendo_tu_corazon.sh",
    "> Sincronizando recuerdos...",
    "> Analizando fragmentos de memoria...",
    "> Todo listo. FELIZ DÍA DEL PADRE 2026."
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

    // TRUCO MAESTRO: Precargamos las primeras 10 fotos en memoria invisible
    // Esto se hace mientras el usuario ve el botón de inicio
    nombresDeArchivos.slice(0, 10).forEach(nombre => {
        const prefetch = new Image();
        prefetch.src = `./assets/${nombre}`;
    });

    function cargarFotoIndividual(index) {
        if (index >= nombresDeArchivos.length) {
            setTimeout(escribirDedicatoria, 4000);
            return;
        }

        const nombre = nombresDeArchivos[index];
        const div = document.createElement("div");
        div.className = "foto-item";
        div.style.setProperty('--r', `${(Math.random() * 6 - 3)}deg`);
        
        const img = document.createElement("img");
        
        // Forzamos a que la imagen no tenga carga perezosa del navegador
        img.loading = "eager"; 
        
        img.onload = () => {
            galeria.appendChild(div);
            div.appendChild(img);
            
            // Un pelín más de tiempo para que el Chromecast "dibuje" la foto
            setTimeout(() => {
                div.classList.add("aparecer");
                const offset = div.offsetTop - 220; 
                contenedorScroll.scrollTo({ top: offset, behavior: 'smooth' });
                
                // Tiempo de espera entre fotos (2.2 segundos)
                setTimeout(() => {
                    cargarFotoIndividual(index + 1);
                }, 2222); 
            }, 100); // Aumentamos a 100ms para asegurar el renderizado
        };

        img.onerror = () => {
            console.error("Error: " + nombre);
            cargarFotoIndividual(index + 1);
        };

        // Añadimos un parámetro aleatorio al final para evitar que la caché de la tele se líe
        img.src = `./assets/${nombre}?v=${Date.now()}`;
    }

    // Arrancamos
    cargarFotoIndividual(0);
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
