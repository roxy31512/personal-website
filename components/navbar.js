class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  attachEventListeners() {
    // Desktop dropdown
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

    // Mobile hamburger
    const hamburger = this.querySelector('.hamburger');
    const navLinks = this.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
      
      // Close menu when link is clicked
      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
        });
      });
    }
  }

  render() {
    this.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        header.site-header {
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          position: sticky;
          top: 0;
          z-index: 999;
          padding: 1rem 0;
          width: 100%;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          flex: 1;
          justify-content: flex-end;
        }

        .nav-links a {
          color: #d8e1eb;
          text-decoration: none;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 6px;
          transition: all 0.15s ease;
        }

        .nav-links a:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .cta-link {
          background: rgba(159,192,255,0.1);
          border: 1px solid rgba(159,192,255,0.3);
          color: #9fc0ff;
        }

        .cta-link:hover {
          background: rgba(159,192,255,0.2);
        }

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

        .dropdown-toggle a {
          color: #d8e1eb;
          text-decoration: none;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 6px;
          transition: all 0.15s ease;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          transition: transform 0.2s;
          color: #d8e1eb;
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

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.15s ease;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          background: #d8e1eb;
          transition: all 0.3s ease;
          display: block;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10,10,12,0.98);
            padding: 1rem;
            gap: 0.5rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a {
            padding: 12px;
            border-radius: 6px;
          }

          .dropdown-menu {
            position: static;
            display: none;
            background: rgba(255,255,255,0.05);
            margin-top: 0.5rem;
            border: none;
            box-shadow: none;
            padding: 8px 0;
          }

          .dropdown:hover .dropdown-menu {
            display: block;
          }
        }
      </style>

      <header class="site-header">
        <div class="nav-inner container mx-auto px-6">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <a href="http://www.linkedin.com/in/roxanaakhmetova/" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="LinkedIn" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" style="width: 24px; height: 24px;">
            </a>
            <a href="https://scholar.google.com/citations?user=uxvwJb4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; padding: 4px; border-radius: 6px; transition: all 0.15s ease; opacity: 0.9;" aria-label="Google Scholar" onmouseover="this.style.opacity='1';" onmouseout="this.style.opacity='0.9';">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" style="width: 24px; height: 24px;">
            </a>
            <a class="brand" href="/" aria-label="Home" style="display: flex; align-items: center; gap: 0.6rem; font-weight: 600; font-size: 1.1rem; color: #f0f4ff; text-decoration: none;">
              Home
            </a>
          </div>

          <nav class="nav-links" aria-label="Primary">
            <a href="/consulting">Consulting</a>
            <a href="/current-projects">Current Projects</a>
            <div class="dropdown">
              <span class="dropdown-toggle">
                <a href="/past-projects">Past Projects</a>
                <span class="dropdown-arrow">▼</span>
              </span>
              <div class="dropdown-menu">
                <a href="/oxford-ai-gala">Oxford AI Gala 2025</a>
                <a href="/oxford-ai-leadership">Oxford AI Leadership</a>
              </div>
            </div>
            <a href="/publications">Publications</a>
            <a href="/bio">Bio</a>
            <a href="/education">Education</a>
            <a href="/awards">Awards</a>
            <a href="/contact" class="cta-link">Contact</a>
          </nav>

          <div class="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
