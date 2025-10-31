// components/footer.js
class CustomFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <footer class="bg-transparent border-t mt-12">
        <div class="container mx-auto px-4 py-6 text-center text-sm text-gray-400 flex items-center justify-center gap-4">
          <span>&copy; ${new Date().getFullYear()} Roxana Akhmetova</span>
          <a href="https://www.linkedin.com/in/akhmetovaroxana/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2a4 4 0 0 1 4-2z"></path><rect x="2" y="9" width="4" height="11"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span class="text-sm">LinkedIn</span>
          </a>
          <!-- Optional Twitter example (uncomment if desired)
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-gray-300 hover:text-white">
            <svg ...twitter svg...></svg><span class="text-sm">Twitter</span>
          </a>
          -->
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
