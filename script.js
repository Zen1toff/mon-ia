// Pour le profil
document.querySelector('.user-avatar').onclick = function() {
    document.getElementById('profile-modal').classList.toggle('active');
};

// Pour la recherche
document.querySelector('.search-icon').onclick = function() {
    document.getElementById('search-overlay').classList.add('active');
};

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('search-overlay').classList.remove('active');
};

// Pour le bouton Regarder
document.querySelector('.btn-primary').onclick = function() {
    document.getElementById('video-player').classList.add('active');
};

document.querySelector('.close-player').onclick = function() {
    document.getElementById('video-player').classList.remove('active');
};
