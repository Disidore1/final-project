import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaWrestlerCard extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-wrestler-card";
  }

  static get properties() {
    return {
      name: { type: String },
      age: { type: Number },
      weightClass: { type: String },
      record: { type: String },
      focus: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Tony Drown";
    this.age = 17;
    this.weightClass = "165 lbs";
    this.record = "12-4";
    this.focus = "Takedown defense and conditioning";
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
          background-color: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-6);
          border: 2px solid #3b1f0f;
        }

        .label {
          font-size: var(--ddd-font-size-s);
          font-weight: bold;
          text-transform: uppercase;
          color: #7a3f16;
          letter-spacing: 1px;
          margin-bottom: var(--ddd-spacing-2);
        }

        h2 {
          margin: 0 0 var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-xl);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-4);
        }

        .stat {
          background-color: #f7f0e8;
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-sm);
        }

        .stat strong {
          display: block;
          margin-bottom: var(--ddd-spacing-1);
        }

        @media (max-width: 700px) {
          .stats {
            grid-template-columns: 1fr;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="card">
        <div class="label">Wrestler Spotlight</div>
        <h2>${this.name}</h2>

        <p>
          ${this.name} is one of the featured wrestlers for Oompa Loompa
          Wrestling during the off-season tournament schedule.
        </p>

        <div class="stats">
          <div class="stat">
            <strong>Age</strong>
            ${this.age}
          </div>

          <div class="stat">
            <strong>Weight Class</strong>
            ${this.weightClass}
          </div>

          <div class="stat">
            <strong>Record</strong>
            ${this.record}
          </div>
        </div>

        <p><strong>Training Focus:</strong> ${this.focus}</p>
      </article>
    `;
  }
}

globalThis.customElements.define(OompaWrestlerCard.tag, OompaWrestlerCard);