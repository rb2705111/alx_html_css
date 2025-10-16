/**
 * Hamburger Menu Functionality
 * Toggles mobile navigation menu
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    /**
     * Toggle menu open/close
     */
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update ARIA attribute for accessibility
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    }

    /**
     * Close menu
     */
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    // Hamburger click event
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on ESC key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 480 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });

    /**
     * Smooth scroll for anchor links
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an anchor link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    /**
     * Add scroll effect to header
     */
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(7, 22, 41, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
});
```

---

## Summary of All Files

Your complete GitHub repository structure should be:
```
alx_html_css/
└── headphones/
    ├── README.md
    ├── 0-index.html
    ├── 0-styles.css
    ├── 1-index.html
    ├── 1-styles.css
    ├── 2-index.html
    ├── 2-styles.css
    ├── 3-index.html
    ├── 3-styles.css
    ├── 4-index.html
    ├── 4-styles.css
    ├── 6-index.html
    ├── 6-styles.css
    ├── 7-index.html
    ├── 7-styles.css
    ├── 8-index.html
    ├── 8-styles.css
    ├── 8-script.js
    ├── images/
    │   ├── .gitkeep
    │   ├── logo_headphones.png
    │   ├── headphones_hero_1.jpg
    │   ├── headphones_hero_2.jpg
    │   ├── pentagone.png
    │   ├── fb_icon.png
    │   ├── twitter_icon.png
    │   └── instagram_icon.png
    └── fonts/
        └── .gitkeep
