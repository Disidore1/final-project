import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaAuthorProfile extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-author-profile";
  }

  static get properties() {
    return {
      name: { type: String },
      role: { type: String },
      since: { type: String },
      channel: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Mighty Mouse";
    this.role = "Coach / Media Lead";
    this.since = "2023";
    this.channel = "Oompa Loompa Wrestling Media";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .profile {
          margin-top: var(--ddd-spacing-6);
          padding: var(--ddd-spacing-6);
          background: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-md);
          border: 2px solid #3b1f0f;
        }

        .label {
          font-size: var(--ddd-font-size-s);
          font-weight: bold;
          text-transform: uppercase;
          color: #7a3f16;
          margin-bottom: var(--ddd-spacing-2);
        }

        h2 {
          margin: 0 0 var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xl);
        }

        .meta {
          display: grid;
          gap: var(--ddd-spacing-2);
          margin-top: var(--ddd-spacing-4);
        }

        .meta div {
          background: #f7f0e8;
          padding: var(--ddd-spacing-3);
          border-radius: var(--ddd-radius-sm);
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="profile">
        <div class="label">Author Profile</div>
        <h2>${this.name}</h2>
        <p>${this.role}</p>

        <div class="meta">
          <div><strong>Channel:</strong> ${this.channel}</div>
          <div><strong>User Since:</strong> ${this.since}</div>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(OompaAuthorProfile.tag, OompaAuthorProfile);