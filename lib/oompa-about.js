import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaAbout extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-about";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .about {
          margin-top: var(--ddd-spacing-6);
          padding: var(--ddd-spacing-6);
          background-color: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-md);
        }

        h2 {
          margin-top: 0;
          font-size: var(--ddd-font-size-xl);
        }

        p {
          font-size: var(--ddd-font-size-m);
          line-height: 1.6;
          max-width: 850px;
        }

        .details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-5);
        }

        .detail-card {
          border: 2px solid #3b1f0f;
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-4);
        }

        .detail-card strong {
          display: block;
          font-size: var(--ddd-font-size-l);
        }

        @media (max-width: 700px) {
          .details {
            grid-template-columns: 1fr;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="about">
        <h2>About the Team</h2>
        <p>
          Oompa Loompa Wrestling is a fictional off-season wrestling organization
          based in Pennsylvania. The team gives young wrestlers ages 5–18 a place
          to train, compete, and stay active outside of the regular school season.
        </p>

        <div class="details">
          <div class="detail-card">
            <strong>Location</strong>
            Pennsylvania
          </div>

          <div class="detail-card">
            <strong>Ages</strong>
            5–18
          </div>

          <div class="detail-card">
            <strong>Focus</strong>
            Team and individual tournaments
          </div>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(OompaAbout.tag, OompaAbout);