class planetCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "img", "user-weight", "link", "gravity"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  getStyles() {
    return `
      <style>
        :host {
          width: 100%;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .planet-card {
          display: flex;
          width: 100%;
          max-width: 340px;
          min-width: 320px;
        }

        .planet-card .image-container {
          flex: 1;
          margin: 0;
          padding: 0;
        }
        
        .planet-card .image-container .card--image {
          width: 100%;
          max-width: 200px;
          min-height: 200px;
          border-radius: 100%; 
        }
      </style>
    `;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <article class="planet-card">
        <figure class="image-container">
          <img 
            class="card--image" 
            src="${this.dataset.img}" 
            alt="Planeta ${this.dataset.name}"/>
        </figure>
        <div class="info-container">
          <h3 class="card--title">${this.dataset.name}</h3>
          <p class="card--description">
            la gravedad en este planeta es de: 
            ${this.dataset.gravity}
            <br />
            Tu peso en este planeta es de: 
            ${this.dataset.userWeight}
          </p>
          <button type="button">
            <a href="${this.dataset.link}">
              Learn more
            </a>
          </button>
        </div>
      </article>
      ${this.getStyles()}
    `;

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

export default planetCard;
