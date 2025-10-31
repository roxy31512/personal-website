// components/navbar.js
class CustomNavbar extends HTMLElement {
  constructor(){
    super();
    this.menuOpen = false;
  }

  connectedCallback(){
    this.render();
    this.installListeners();
  }

  render(){
    this.innerHTML = `
      <header class="site-header">
        <div class="nav-inner container mx-auto px-6 flex items-center justify-between">
          <a class="brand" href="/index.html" aria-label="Home">
            <!-- small circular avatar on left -->
            <img src="https://raw.githubusercontent.com/roxy31512/personal-website/main/images/Profile%20Image.jpg" alt="Roxana Akhmetova" class="nav-avatar">
          </a>

          <nav class="nav-links" aria-label="Primary">
            <a href="/consulting.html">Consulting</a>
            <a href="/current-projects.html">Current Projects</a>
            <a href="/past-projects.html">Past Projects</a>
            <a href="/bio.html">Bio</a>
            <a href="/education.html">Education</a>
            <a href="/awards.html">Awards</a>
            <a href="/skills.html">Skills</a>
            <a href="/contact.html" class="cta-link">Contact</a>
            <a href="https://www.linkedin.com/in/akhmetovaroxana/" target="_blank" rel="noopener noreferrer" class="linkedin-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2a4 4 0 0 1 4-2z"></path>
                <rect x="2" y="9" width="4" height="11"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </nav>

          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span class="hamburger"></span>
          </button>
        </div>
      </header>
    `;
  }

  installListeners(){
    const btn = this.querySelector('.nav-toggle');
    const nav = this.querySelector('.nav-links');

    btn.addEventListener('click', () => {
      this.menuOpen = !this.menuOpen;
      nav.classList.toggle('open', this.menuOpen);
      btn.setAttribute('aria-expanded', String(this.menuOpen));
    });

    // close menu when clicking a link on small screens
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (this.menuOpen) {
          nav.classList.remove('open');
          this.menuOpen = false;
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
