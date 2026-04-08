class FAQAccordion extends HTMLElement {
  constructor () {
    super();

    this.onToggle = this.onToggle.bind(this);
    this.isOpened = false;
  }

  connectedCallback () {
    this.toggle = this.querySelector('[data-toggle]');
    this.content = this.querySelector('[data-content]');

    if (!this.toggle || !this.content) return;

    this.toggle.addEventListener('click', this.onToggle);
  }

  disconnectedCallback () {
    if (!this.toggle) return;
    this.toggle.removeEventListener('click', this.onToggle);
  }

  onToggle () {
    if (!this.isOpened) {
      this.content.style.maxHeight = `${this.content.scrollHeight}px`;
      this.content.classList.add('is-open');
    } else {
      this.content.style.maxHeight = 0;
      this.content.classList.remove('is-open');
    }

    this.isOpened = !this.isOpened;
  }
}

customElements.define('faq-accordion', FAQAccordion);