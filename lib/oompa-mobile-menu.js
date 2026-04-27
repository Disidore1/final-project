import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaMobileMenu extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-mobile-menu";
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.open = false;
  }

  toggleMenu() {
    this.open = !this.open;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .menu-wrapper {
          margin-top: var(--ddd-spacing-4);
        }

        button {
          background-color: #3b1f0f;
          color: white;
          border: none;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-sm);
          font-weight: bold;
          cursor: pointer;
        }

        .panel {
          margin-top: var(--ddd-spacing-3);
          background: white;
          color: #3b1f0f;
          border: 2px solid #3b1f0f;
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-4);
        }

        .panel a {
          display: block;
          color: #3b1f0f;
          text-decoration: none;
          font-weight: bold;
          margin-bottom: var(--ddd-spacing-3);
        }

        .panel a:last-child {
          margin-bottom: 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="menu-wrapper">
        <button @click="${this.toggleMenu}">
          ${this.open ? "Close Menu" : "Open Menu"}
        </button>

        ${this.open
          ? html`
              <div class="panel">
                <a href="/">Home</a>
                <a href="/schedule">Schedule</a>
                <a href="/wrestlers">Wrestlers</a>
                <a href="/media">Media</a>
              </div>
            `
          : ""}
      </div>
    `;
  }
}

globalThis.customElements.define(OompaMobileMenu.tag, OompaMobileMenu);