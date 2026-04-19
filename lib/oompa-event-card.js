import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaEventCard extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-event-card";
  }

  static get properties() {
    return {
      eventName: { type: String },
      date: { type: String },
      location: { type: String },
      eventType: { type: String },
      ageGroup: { type: String },
    };
  }

  constructor() {
    super();
    this.eventName = "4th of July Tournament";
    this.date = "July 4, 2026";
    this.location = "Pennsylvania";
    this.eventType = "Team and Individual";
    this.ageGroup = "5–18";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .event {
          margin-top: var(--ddd-spacing-6);
          background-color: #3b1f0f;
          color: white;
          border-radius: var(--ddd-radius-md);
          padding: var(--ddd-spacing-6);
        }

        .label {
          font-size: var(--ddd-font-size-s);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #f7d48b;
          margin-bottom: var(--ddd-spacing-2);
        }

        h2 {
          margin: 0 0 var(--ddd-spacing-3);
          font-size: var(--ddd-font-size-xl);
        }

        p {
          line-height: 1.6;
        }

        .info {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-5);
        }

        .info-box {
          background-color: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-4);
        }

        .info-box strong {
          display: block;
          margin-bottom: var(--ddd-spacing-1);
        }

        @media (max-width: 800px) {
          .info {
            grid-template-columns: 1fr;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <article class="event">
        <div class="label">Upcoming Tournament</div>
        <h2>${this.eventName}</h2>

        <p>
          Oompa Loompa Wrestling athletes will compete in both team and
          individual matches during this off-season tournament.
        </p>

        <div class="info">
          <div class="info-box">
            <strong>Date</strong>
            ${this.date}
          </div>

          <div class="info-box">
            <strong>Location</strong>
            ${this.location}
          </div>

          <div class="info-box">
            <strong>Type</strong>
            ${this.eventType}
          </div>

          <div class="info-box">
            <strong>Ages</strong>
            ${this.ageGroup}
          </div>
        </div>
      </article>
    `;
  }
}

globalThis.customElements.define(OompaEventCard.tag, OompaEventCard);