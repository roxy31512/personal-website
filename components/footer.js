// components/footer.js
class CustomFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <footer class="bg-transparent border-t mt-12">
        <div class="container mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <span>&copy; ${new Date().getFullYear()} Roxana Akhmetova</span>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);