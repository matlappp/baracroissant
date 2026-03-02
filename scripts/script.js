document.querySelector('.mobile-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.mobile-menu').classList.remove('active');
        document.querySelector('nav').classList.remove('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('popup-overlay');
    const closeBtn = overlay.querySelector('.popup-close');
    const yearSpan = document.getElementById('year');

    yearSpan.textContent = new Date().getFullYear();
    closeBtn.addEventListener('click', () => overlay.classList.add('hidden'));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.add('hidden');
    });
});