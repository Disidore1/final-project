import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaHeader extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-header";
  }

  static get properties() {
    return {
      menuItems: { type: Array },
      menuOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.menuItems = [];
    this.menuOpen = false;
  }

  toggleTopMenu() {
    this.menuOpen = !this.menuOpen;
  }

  handleNavClick(e, slug) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("navigate-page", {
        bubbles: true,
        composed: true,
        detail: { page: slug },
      })
    );
  }

  renderSubmenuItem(item) {
    return html`
      <a href="?page=${item.slug}" @click=${(e) => this.handleNavClick(e, item.slug)}>
        ${item.title}
      </a>
    `;
  }

  renderMenuItem(item) {
    if (item.children?.length) {
      return html`
        <div class="dropdown-group">
          <button class="dropdown-toggle" @click=${this.toggleTopMenu}>
            ${item.title}
          </button>
          ${this.menuOpen
            ? html`
                <div class="dropdown-panel">
                  ${item.children.map((child) => this.renderSubmenuItem(child))}
                </div>
              `
            : ""}
        </div>
      `;
    }

    return html`
      <a href="?page=${item.slug}" @click=${(e) => this.handleNavClick(e, item.slug)}>
        ${item.title}
      </a>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        header {
          background-color: #3b1f0f;
          color: white;
          padding: var(--ddd-spacing-4);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: var(--ddd-radius-sm);
          position: relative;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
        }

        .brand img {
          width: 88px;
          height: 88px;
          object-fit: contain;
          border-radius: var(--ddd-radius-sm);
          background: white;
          padding: 6px;
        }

        nav {
          display: flex;
          align-items: center;
          gap: var(--ddd-spacing-4);
        }

        nav a,
        .dropdown-toggle {
          color: white;
          text-decoration: none;
          font-weight: bold;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
        }

        nav a:hover,
        .dropdown-toggle:hover {
          text-decoration: underline;
        }

        .dropdown-group {
          position: relative;
        }

        .dropdown-panel {
          position: absolute;
          top: 140%;
          right: 0;
          background: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-3);
          min-width: 160px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .dropdown-panel a {
          display: block;
          color: #3b1f0f;
          margin-bottom: var(--ddd-spacing-2);
        }

        .dropdown-panel a:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          nav {
            display: none;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div class="brand">
          <img src="/lib/assets/olw-logo.png" alt="Oompa Loompa Wrestling logo" />
          <span>Oompa Loompa Wrestling</span>
        </div>
        <nav>
          ${this.menuItems.map((item) => this.renderMenuItem(item))}
        </nav>
      </header>
    `;
  }
}

globalThis.customElements.define(OompaHeader.tag, OompaHeader);