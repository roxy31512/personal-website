class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Add any interactive functionality here if needed
  }

  render() {
    this.innerHTML = `
      <header class="site-header">
        <div class="nav-inner container mx-auto px-6 flex items-center justify-between">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <a class="brand" href="/index.html" aria-label="Home" style="display: flex; align-items: center; gap: 0.6rem;">
              <img src="https://raw.githubusercontent.com/roxy31512/personal-website/main/images/Profile%20Image.jpg" alt="Roxana Akhmetova" class="w-12 h-12 rounded-full object-cover" style="object-position: 10% center;">
            </a>
            <a href="https://www.linkedin.com/in/akhmetovaroxana/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; color: #9fc0ff; padding: 6px; border-radius: 6px; transition: all 0.15s ease;" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2a4 4 0 0 1 4-2z"></path>
                <rect x="2" y="9" width="4" height="11"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <nav class="nav-links" aria-label="Primary">
            <a href="/consulting.html">Consulting</a>
            <a href="/current-projects.html">Current Projects</a>
            <a href="/past-projects.html">Past Projects</a>
            <a href="/publications.html">Publications</a>
            <a href="/bio.html">Bio</a>
            <a href="/education.html">Education</a>
            <a href="/awards.html">Awards</a>
            <a href="/skills.html">Skills</a>
            <a href="/contact.html" class="cta-link">Contact</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);