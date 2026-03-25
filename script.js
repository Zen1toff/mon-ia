const video = document.getElementById('player');
const canvas = document.getElementById('effect-overlay');
const ctx = canvas.getContext('2d');
const uploader = document.getElementById('uploader');

// Charger la vidéo
uploader.onchange = (e) => {
    const file = e.target.files[0];
    video.src = URL.createObjectURL(file);
};

// Fonction pour appliquer des effets (CSS Filter pour la vitesse)
function applyEffect(type) {
    if(type === 'matrix') {
        video.style.filter = "contrast(1.5) brightness(0.8) hue-rotate(90deg)";
    } else if(type === 'sepia') {
        video.style.filter = "sepia(1)";
    } else {
        video.style.filter = "invert(1)";
    }
}

// Pour faire du vrai montage (couper/coller), il faut utiliser FFmpeg.wasm
// Voici l'initialisation (nécessite un serveur avec des headers COOP/COEP)
const { createFFmpeg } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });

async function loadFFmpeg() {
    await ffmpeg.load();
    console.log("Moteur de rendu prêt !");
}

loadFFmpeg();

