class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();  // Add this line
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Add any interactive functionality here if needed
  }

  render() {
    this.innerHTML = `
      <header class="site-header">
        <div class="nav-inner container mx-auto px-6 flex items-center justify-between">
          <a class="brand" href="/index.html" aria-label="Home">
            <!-- small circular avatar on left -->
            <img src="https://raw.githubusercontent.com/roxy31512/personal-website/main/images/Profile%20Image.jpg" alt="Roxana Akhmetova" class="w-12 h-12 rounded-full object-cover" style="object-position: 20% center;">
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
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);