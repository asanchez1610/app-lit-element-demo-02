import { LitElement, html, css } from "lit-element";

class HeaderApp extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
        titleApp: {
            type: String,
            attribute: 'title-app'
        }
    };
  }

  constructor() {
      super();
      this.titleApp = '';
      this.init()
  }

  async init() {
    await this.updateComplete;
    //apartir  de esta parte los atributos ya terminaron de actualizarce
    console.log(this.titleApp);
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      />

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">${this.titleApp}</a>
          </div>
        </nav>
  
    `;
  }
}
customElements.define("header-app", HeaderApp);
