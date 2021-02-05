import { LitElement, html, css } from 'lit-element';
import './components/header-app/header-app';

export class AppLitElement extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      :host {

      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <header-app title-app="Aplicación en LitElement"></header-app>

      Application Lit Element !
    `;
  }
}
