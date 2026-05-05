import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaHero extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-hero";
  }

  handleScheduleClick() {
    this.dispatchEvent(
      new CustomEvent("view-schedule", {
        bubbles: true,
        composed: true,
      })
    );
  }

  handleWrestlersClick() {
    this.dispatchEvent(
      new CustomEvent("view-wrestlers", {
        bubbles: true,
        composed: true,
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

        .hero {
          margin-top: var(--ddd-spacing-6);
          padding: var(--ddd-spacing-8);
          background-color: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-md);
          border: 3px solid #3b1f0f;
        }

        .label {
          font-size: var(--ddd-font-size-s);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #7a3f16;
          margin-bottom: var(--ddd-spacing-3);
        }

        h1 {
          margin: 0;
          font-size: var(--ddd-font-size-xxxl);
          line-height: 1.1;
        }

        p {
          font-size: var(--ddd-font-size-m);
          max-width: 700px;
          line-height: 1.6;
        }

        .actions {
          margin-top: var(--ddd-spacing-5);
          display: flex;
          gap: var(--ddd-spacing-4);
          flex-wrap: wrap;
        }

        button {
          background-color: #3b1f0f;
          color: white;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
          border-radius: var(--ddd-radius-sm);
          text-decoration: none;
          font-weight: bold;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        button.secondary {
          background-color: white;
          color: #3b1f0f;
          border: 2px solid #3b1f0f;
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="hero">
        <div class="label">Pennsylvania Off-Season Wrestling</div>

        <h1>Oompa Loompa Wrestling</h1>

        <p>
          A fictional wrestling team media page for athletes ages 5–18,
          focused on tournaments, wrestler spotlights, training updates,
          and off-season competition.
        </p>

        <div class="actions">
          <button @click=${this.handleScheduleClick}>View Schedule</button>
          <button class="secondary" @click=${this.handleWrestlersClick}>
            Meet the Wrestlers
          </button>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(OompaHero.tag, OompaHero);