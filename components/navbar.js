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
                <!-- R -->
                <path d="M10 10 L10 30 M10 10 L18 10 Q20 10 20 14 Q20 18 18 18 L10 18 M18 18 L20 30" 
                      stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                
                <!-- A -->
                <path d="M24 30 L28 10 L32 30 M25.5 20 L30.5 20" 
                      stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                
                <!-- Connection line (bridge) -->
                <line x1="20" y1="20" x2="24" y2="20" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
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