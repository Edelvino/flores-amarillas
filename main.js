const canciones = [
    "sound/cancion1.mp3",
    "sound/cancion2.mp3",
    "sound/cancion3.mp3",
    "sound/cancion4.mp3"
];

const musica = document.getElementById("musica");

let indiceCancion = 0;

function reproducirCancion() {
    musica.src = canciones[indiceCancion];
    musica.load();

    musica.play().catch((error) => {
        console.log("La reproducción fue bloqueada:", error);
    });
}

musica.addEventListener("ended", () => {
    indiceCancion++;

    if (indiceCancion >= canciones.length) {
        indiceCancion = 0;
    }

    reproducirCancion();
});

onload = () => {
    document.body.classList.remove("container");

    reproducirCancion();
};