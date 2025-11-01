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
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #f0f4ff;">
                <!-- R shape with geometric style -->
                <path d="M8 8 L8 32 M8 8 L18 8 L22 12 L22 16 L18 20 L8 20 M18 20 L22 32" 
                      stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                
                <!-- A shape -->
                <path d="M26 32 L30 8 L34 32 M27.5 22 L32.5 22" 
                      stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                
                <!-- Tech accent - small circuit nodes -->
                <circle cx="22" cy="12" r="1.5" fill="currentColor"/>
                <circle cx="22" cy="16" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/akhmetovaroxana/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="LinkedIn" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 24px; height: 24px;">
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