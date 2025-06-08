document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#mainMenu .nav-link');
    const sections = [];

    // Simpan referensi ke setiap section yang ditautkan
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

    // Tambahkan event listener scroll
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(sec => {
            // Tambahkan offset agar link aktif sedikit lebih awal
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

    // Tambahkan event listener click agar manual juga tetap bekerja
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
