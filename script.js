const cards = document.querySelectorAll('.num-card');
const bgVideo = document.getElementById('bg-video');
const videoSource = bgVideo.querySelector('source');
const textBlock = document.querySelector('.text-block');

// Les éléments de texte à mettre à jour
const mainTitle = document.querySelector('.main-title');
const subtitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');

// Préchargement des vidéos (pour éviter le lag lors du changement)
cards.forEach(card => {
    const videoUrl = card.getAttribute('data-video');
    if (videoUrl) {
        const preloader = new Audio(videoUrl); // Truc de hack pour précharger
        preloader.preload = 'auto';
    }
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        // 1. Gérer l'état actif des cartes (Typographiques)
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // 2. Transition de l'arrière-plan (Fondu lent)
        const newVideoSrc = card.getAttribute('data-video');
        
        if (newVideoSrc && videoSource.src !== newVideoSrc) {
            bgVideo.style.opacity = '0';

            setTimeout(() => {
                videoSource.src = newVideoSrc;
                bgVideo.load();
                
                bgVideo.onloadeddata = () => {
                    bgVideo.style.opacity = '1';
                };
            }, 600); // Un peu plus long pour le luxe
        }

        // 3. Mettre à jour les textes (avec une petite animation)
        textBlock.style.opacity = '0';
        textBlock.style.transform = 'translateY(15px)';

        setTimeout(() => {
            mainTitle.innerText = card.getAttribute('data-title');
            subtitle.innerText = card.getAttribute('data-subtitle');
            description.innerText = card.getAttribute('data-desc');
            
            textBlock.style.opacity = '1';
            textBlock.style.transform = 'translateY(0)';
        }, 600);
    });
});
