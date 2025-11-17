class GoogleAnalytics extends HTMLElement {
  connectedCallback() {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-MGN9GQ9MLD';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MGN9GQ9MLD');
    `;
    document.head.appendChild(script2);
  }
}

customElements.define('google-analytics', GoogleAnalytics);
