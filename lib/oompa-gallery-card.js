import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaGalleryCard extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-gallery-card";
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      date: { type: String },
      imageLabel: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Training Day Highlights";
    this.description =
      "Photos and updates from off-season training and live wrestling sessions.";
    this.date = "March 2026";
    this.imageLabel = "Wrestling Media";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .card {
          margin-top: var(--ddd-spacing-6);
          background: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-md);
          overflow: hidden;
          border: 2px solid #3b1f0f;
        }

        .image-box {
          background: linear-gradient(135deg, #3b1f0f, #7a3f16);
          color: white;
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
          text-align: center;
          padding: var(--ddd-spacing-4);
        }

        .content {
          padding: var(--ddd-spacing-5);
        }

        .date {
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

        p {
          margin: 0;
          line-height: 1.6;
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="card">
        <div class="image-box">${this.imageLabel}</div>
        <div class="content">
          <div class="date">${this.date}</div>
          <h2>${this.title}</h2>
          <p>${this.description}</p>
        </div>
      </article>
    `;
  }
}

globalThis.customElements.define(OompaGalleryCard.tag, OompaGalleryCard);