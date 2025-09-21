class ExportButton extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.buttonText = "הורדה לשרת קבצים (Excel)";
    this.color = "blue";
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['buttonText', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
    }
  }

  render() {
    this.root.innerHTML = `
      <style>
        button {
          background-color: ${this.color};
          color: white;
          padding: 10px 20px;
          font-size: 14px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <button>${this.buttonText}</button>
    `;

    this.root.querySelector('button').onclick = () => {
      this.dispatchEvent(new CustomEvent('onClick', { bubbles: true }));
    };
  }
}

customElements.define('com-company-export-button', ExportButton);
