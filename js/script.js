document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-overlay ul li a');

    if (mobileMenuToggle && mobileNavOverlay && closeMenuBtn) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNavOverlay.classList.add('open');
        });

        closeMenuBtn.addEventListener('click', function() {
            mobileNavOverlay.classList.remove('open');
        });

        // Fechar menu ao clicar em um link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNavOverlay.classList.remove('open');
            });
        });
    }

    // Marca a página atual na navegação
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const mobileNavLinksFull = document.querySelectorAll('.mobile-nav-overlay ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Garante que apenas um esteja ativo
        }
    });

    mobileNavLinksFull.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});