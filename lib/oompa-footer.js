import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaFooter extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-footer";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        footer {
          margin-top: var(--ddd-spacing-6);
          padding: var(--ddd-spacing-5);
          background-color: #3b1f0f;
          color: white;
          border-radius: var(--ddd-radius-md);
          text-align: center;
        }

        .title {
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
          margin-bottom: var(--ddd-spacing-2);
        }

        .sub {
          font-size: var(--ddd-font-size-s);
        }
      `,
    ];
  }

  render() {
    return html`
      <footer>
        <div class="title">Oompa Loompa Wrestling</div>
        <div class="sub">
          Pennsylvania off-season wrestling for athletes ages 5–18
        </div>
      </footer>
    `;
  }
}

globalThis.customElements.define(OompaFooter.tag, OompaFooter);