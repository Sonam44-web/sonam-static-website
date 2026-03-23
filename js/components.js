// Components Injection Logic
document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
    initScrollEffects();
});

function injectNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const currentPath = window.location.pathname.toLowerCase();
    
    // Check which page we're on for the 'active' class
    const isHome = currentPath === '/' || currentPath.includes('index');
    const isAbout = currentPath.includes('about');
    const isSkills = currentPath.includes('skills');
    const isContact = currentPath.includes('contact');

    navbar.innerHTML = `
        <nav class="navbar animate-up" id="main-nav">
            <div class="container nav-container">
                <a href="index.html" class="logo">
                     <img src="assets/logo.png" alt="ITHUB Logo" style="height: 40px;">
                </a>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link ${isHome ? 'active' : ''}">Home</a></li>
                    <li><a href="about.html" class="nav-link ${isAbout ? 'active' : ''}">About</a></li>
                    <li><a href="skills.html" class="nav-link ${isSkills ? 'active' : ''}">Skills</a></li>
                    <li><a href="contact.html" class="nav-link ${isContact ? 'active' : ''}">Contact</a></li>
                </ul>
                <div class="mobile-menu-btn" id="mobile-btn" onclick="toggleMobileMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
}

function injectFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const year = new Date().getFullYear();
    footer.innerHTML = `
        <footer class="footer">
            <div class="container footer-content">
                <div class="footer-info">
                    <a href="index.html" class="logo"><img src="assets/logo.png" alt="ITHUB Logo" style="height: 40px; filter: grayscale(1) brightness(200%);"></a>
                    <p>IT Specialist focused on System Administration, Linux Management, and Enterprise Infrastructure Security.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About & Experience</a></li>
                        <li><a href="skills.html">Technical Skills</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:contact@example.com">Send Email</a></li>
                        <li><a href="tel:+1234567890">Call Direct</a></li>
                        <li><a href="contact.html">Send Message</a></li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="footer-bottom">
                    <p>&copy; ${year} ITHUB Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

function initScrollEffects() {
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

function toggleMobileMenu() {
    const links = document.querySelector('.nav-links');
    const btn = document.getElementById('mobile-btn');
    links.classList.toggle('mobile-active');
    btn.classList.toggle('active');
}
