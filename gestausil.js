// Seleziona gli elementi HTML
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Accesso alla fotocamera
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
        // Collega il flusso video alla sorgente del video HTML
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Errore fotocamera:", err);
    });

// Scatta la foto al click del bottone
document.getElementById('capture').addEventListener('click', () => {
    // Imposta le dimensioni del canvas in base al video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // Disegna il frame del video sul canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // (Opzionale) Mostra un messaggio di conferma
    console.log('Foto scattata e mostrata nel canvas!');
});
