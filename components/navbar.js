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
            <a class="brand" href="/index.html" aria-label="Home" style="display: flex; align-items: center; gap: 0.6rem; font-weight: 600; font-size: 1.1rem; color: #f0f4ff; text-decoration: none;">
              Home
            </a>
            <a href="https://www.linkedin.com/in/akhmetovaroxana/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="LinkedIn" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 24px; height: 24px;">
            </a>
            <a href="https://scholar.google.com/citations?user=uxvwJb4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="Google Scholar" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" style="width: 24px; height: 24px;">
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
            <a href="/contact.html" class="cta-link">Contact</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);