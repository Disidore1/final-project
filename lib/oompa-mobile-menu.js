import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaMobileMenu extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-mobile-menu";
  }

  static get properties() {
    return {
      open: { type: Boolean },
      menuItems: { type: Array },
    };
  }

  constructor() {
    super();
    this.open = false;
    this.menuItems = [];
  }

  toggleMenu() {
    this.open = !this.open;
  }

  handleNavClick(e, slug) {
    e.preventDefault();
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("navigate-page", {
        bubbles: true,
        composed: true,
        detail: { page: slug },
      })
    );
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

        .panel-group-title {
          font-weight: bold;
          margin: var(--ddd-spacing-3) 0 var(--ddd-spacing-2);
          color: #7a3f16;
        }

        .panel-group-links {
          padding-left: var(--ddd-spacing-3);
        }

        @media (min-width: 769px) {
          :host {
            display: none;
          }
        }
      `,
    ];
  }

  renderItem(item) {
    if (item.children?.length) {
      return html`
        <div class="panel-group-title">${item.title}</div>
        <div class="panel-group-links">
          ${item.children.map(
            (child) => html`
              <a
                href="?page=${child.slug}"
                @click=${(e) => this.handleNavClick(e, child.slug)}
              >
                ${child.title}
              </a>
            `
          )}
        </div>
      `;
    }

    return html`
      <a href="?page=${item.slug}" @click=${(e) => this.handleNavClick(e, item.slug)}>
        ${item.title}
      </a>
    `;
  }

  render() {
    return html`
      <div class="menu-wrapper">
        <button @click=${this.toggleMenu}>
          ${this.open ? "Close Menu" : "Open Menu"}
        </button>

        ${this.open
          ? html`
              <div class="panel">
                ${this.menuItems.map((item) => this.renderItem(item))}
              </div>
            `
          : ""}
      </div>
    `;
  }
}

globalThis.customElements.define(OompaMobileMenu.tag, OompaMobileMenu);