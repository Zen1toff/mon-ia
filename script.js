// SÉLECTEURS
const searchBtn = document.querySelector('.search-icon');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.querySelector('.close-btn');
const profileBtn = document.querySelector('.user-avatar');
const profileModal = document.getElementById('profile-modal');
const btnPlay = document.querySelector('.btn-primary');
const videoPlayer = document.getElementById('video-player');
const closePlayer = document.querySelector('.close-player');

// 1. GESTION DE LA RECHERCHE
searchBtn.onclick = () => {
    searchOverlay.style.display = 'flex';
    setTimeout(() => searchOverlay.style.opacity = '1', 10);
    document.getElementById('search-input').focus();
};

closeSearch.onclick = () => {
    searchOverlay.style.opacity = '0';
    setTimeout(() => searchOverlay.style.display = 'none', 500);
};

// 2. GESTION DU PROFIL (Toggle)
profileBtn.onclick = (e) => {
    e.stopPropagation();
    profileModal.style.display = (profileModal.style.display === 'block') ? 'none' : 'block';
};

// Fermer le profil si on clique ailleurs
window.onclick = () => profileModal.style.display = 'none';

// 3. BOUTON REGARDER (L'effet Whaou)
btnPlay.onclick = () => {
    videoPlayer.classList.add('active');
    // On simule le lancement du film
    // Ici, tu pourrais charger une autre vidéo ou passer en plein écran
};

closePlayer.onclick = () => {
    videoPlayer.classList.remove('active');
};

// 4. DÉFILEMENT AUTOMATIQUE DES FILMS (Optionnel)
// Si l'utilisateur n'interagit pas, on passe au film suivant toutes les 10s
let autoSlide = setInterval(() => {
    let activeCard = document.querySelector('.num-card.active');
    let nextCard = activeCard.nextElementSibling || document.querySelector('.num-card:first-child');
    nextCard.click();
}, 15000);

// Arrêter le défilement si l'utilisateur clique
cards.forEach(card => {
    card.addEventListener('click', () => clearInterval(autoSlide));
});
