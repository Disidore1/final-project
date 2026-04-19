import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaHeader extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-header";
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
        }

        .brand {
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
        }

        nav a {
          color: white;
          text-decoration: none;
          margin-left: var(--ddd-spacing-4);
          font-weight: bold;
        }

        nav a:hover {
          text-decoration: underline;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div class="brand">Oompa Loompa Wrestling</div>
        <nav>
          <a href="/">Home</a>
          <a href="/schedule">Schedule</a>
        </nav>
      </header>
    `;
  }
}

globalThis.customElements.define(OompaHeader.tag, OompaHeader);