const cards = document.querySelectorAll('.card');
const bgVideo = document.getElementById('bg-video');
const videoSource = bgVideo.querySelector('source');
const textBlock = document.querySelector('.text-block');

// Les éléments de texte à mettre à jour
const mainTitle = document.querySelector('.main-title');
const subtitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // 1. Gérer l'état actif des cartes
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // 2. Transition de l'arrière-plan (Fondu lent)
        const newVideoSrc = card.getAttribute('data-video');
        
        if (newVideoSrc && videoSource.src !== newVideoSrc) {
            // Cacher la vidéo actuelle
            bgVideo.style.opacity = '0';

            // Changer la source après un court délai
            setTimeout(() => {
                videoSource.src = newVideoSrc;
                bgVideo.load(); // Recharger la vidéo
                
                // Révéler la nouvelle vidéo une fois chargée
                bgVideo.onloadeddata = () => {
                    bgVideo.style.opacity = '1';
                };
            }, 500); // 500ms de noir
        }

        // 3. Mettre à jour les textes (avec une petite animation)
        textBlock.style.opacity = '0';
        textBlock.style.transform = 'translateY(10px)';

        setTimeout(() => {
            mainTitle.innerText = card.getAttribute('data-title');
            subtitle.innerText = card.getAttribute('data-subtitle');
            description.innerText = card.getAttribute('data-desc');
            
            textBlock.style.opacity = '1';
            textBlock.style.transform = 'translateY(0)';
        }, 500); // Synchronisé avec le fondu vidéo
    });
});
