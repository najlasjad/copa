document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#mainMenu .nav-link');
    const sections = [];

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) {
                sections.push({
                    id: href,
                    top: section.offsetTop,
                    element: section
                });
            }
        }
    });

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(sec => {
            if (window.scrollY >= sec.element.offsetTop - 200) {
                current = sec.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
