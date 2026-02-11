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