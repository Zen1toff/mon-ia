
const cards = document.querySelectorAll('.game-card');
const container = document.querySelector('.ps5-container');
const title = document.getElementById('game-title');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Quitar clase activa de los demás
        cards.forEach(c => c.classList.remove('active'));
        
        // Activar la actual
        card.classList.add('active');
        
        // Cambiar fondo con el atributo data-bg
        const newBg = card.getAttribute('data-bg');
        if(newBg) {
            container.style.backgroundImage = `url('${newBg}')`;
        }
        
        // Cambiar título (ejemplo simple)
        const altText = card.querySelector('img')?.alt;
        if(altText) title.innerText = altText;
    });
});

// Reloj simple
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');
}, 1000);
