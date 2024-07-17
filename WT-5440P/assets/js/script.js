document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.style.top = '-60px';
        } else {
            header.style.top = '0';
        }
        lastScrollY = window.scrollY;
    });

    const sections = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const getStartedBtn = document.getElementById('get-started-btn');
    const downloadAppBtn = document.getElementById('download-app-btn');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    getStartedBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    });

    downloadAppBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    });
});
