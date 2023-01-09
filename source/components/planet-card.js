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
          max-width:360px;
          height: fit-content;
          box-sizing: border-box;
          display: grid;
          place-items: center;
          margin: 0;
          padding: 0;
        }

        .planet-card {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .planet-card .image-container {
          flex: 1;
          margin: 0;
          padding: 0;
        }
        
        .planet-card .image-container .card--image {
          width: 100%;
          min-width: 140px;
          max-width: 200px;
          min-height: 200px;
          border-radius: 100%; 
        }

        .planet-card .info-container {
          display:flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;

          color: #e0d9e9;
          font-size: 1.6rem; 
        }

        .planet-card .info-container .card--title {
          font-size: 2.2rem;
          color: #33f3cd;
          margin: 0;
          padding: 0;
        }

        button.planet-button {
          background-color: #56308C;
          padding: 1rem 1.4rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button.planet-button > a {
          color: #e0d9e9;
          font-weight: bold;
          font-size: 1.4rem;
          text-decoration:none;
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
        <section class="info-container">
          <h3 class="card--title">${this.dataset.name}</h3>
          <p class="card--description">
            La gravedad en este planeta es de: 
            <b>${this.dataset.gravity}</b>
            <br /><br />
            Tu peso en este planeta es de: 
            <b>${this.dataset.userWeight}</b>
          </p>
          <button type="button" class="planet-button">
            <a href="${this.dataset.link}" title="Wikipedia link of ${this.dataset.name}" target="_blank">
              Learn more
            </a>
          </button>
        </section>
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

customElements.define("planet-card", planetCard);

