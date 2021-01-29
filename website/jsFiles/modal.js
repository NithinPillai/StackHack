const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const topCloseButton = document.querySelector('.top-close-button');
const topHBar = document.getElementById('hiringTop');

closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
    modal.classList.remove('active');
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
})

topCloseButton.addEventListener('click', function() {
    topHBar.remove(topHBar);
})