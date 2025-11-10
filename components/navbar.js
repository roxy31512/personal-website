class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  attachEventListeners() {
    const dropdown = this.querySelector('.dropdown');
    const dropdownMenu = this.querySelector('.dropdown-menu');
    
    if (dropdown && dropdownMenu) {
      let timeout;
      
      const showMenu = () => {
        clearTimeout(timeout);
        dropdownMenu.style.display = 'block';
      };
      
      const hideMenu = () => {
        timeout = setTimeout(() => {
          dropdownMenu.style.display = 'none';
        }, 200);
      };
      
      dropdown.addEventListener('mouseenter', showMenu);
      dropdown.addEventListener('mouseleave', hideMenu);
      dropdownMenu.addEventListener('mouseenter', showMenu);
      dropdownMenu.addEventListener('mouseleave', hideMenu);
    }
  }

  render() {
    this.innerHTML = `
      <style>
        .dropdown {
          position: relative;
          display: inline-block;
        }
        
        .dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        
        .dropdown-arrow {
          font-size: 0.7rem;
          transition: transform 0.2s;
        }
        
        .dropdown:hover .dropdown-arrow {
          transform: rotate(180deg);
        }
        
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: rgba(10,10,12,0.95);
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.6);
          padding: 8px 0;
          margin-top: 8px;
          z-index: 1000;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .dropdown-menu a {
          display: block;
          padding: 10px 16px;
          color: #d8e1eb;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        
        .dropdown-menu a:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }
      </style>
      
      <header class="site-header">
        <div class="nav-inner container mx-auto px-6 flex items-center justify-between">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <a href="https://www.linkedin.com/in/akhmetovaroxana/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="LinkedIn" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 24px; height: 24px;">
            </a>
            <a href="https://scholar.google.com/citations?user=uxvwJb4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="Google Scholar" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" style="width: 24px; height: 24px;">
            </a>
            <a class="brand" href="/index.html" aria-label="Home" style="display: flex; align-items: center; gap: 0.6rem; font-weight: 600; font-size: 1.1rem; color: #f0f4ff; text-decoration: none;">
              Home
            </a>
          </div>

          <nav class="nav-links" aria-label="Primary">
            <a href="/consulting.html">Consulting</a>
            <a href="/current-projects.html">Current Projects</a>
            <div class="dropdown">
              <span class="dropdown-toggle">
                <a href="/past-projects.html">Past Projects</a>
                <span class="dropdown-arrow">▼</span>
              </span>
              <div class="dropdown-menu">
                <a href="/oxford-ai-gala.html">Oxford AI Gala 2025</a>
                <a href="/oxford-ai-leadership.html">Oxford AI Leadership</a>
              </div>
            </div>
            <a href="/blog.html">Blog</a>
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