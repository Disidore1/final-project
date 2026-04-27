import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class OompaSchedule extends DDDSuper(LitElement) {
  static get tag() {
    return "oompa-schedule";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .schedule {
          margin-top: var(--ddd-spacing-6);
          padding: var(--ddd-spacing-6);
          background: white;
          color: #3b1f0f;
          border-radius: var(--ddd-radius-md);
        }

        h2 {
          margin-top: 0;
          font-size: var(--ddd-font-size-xl);
        }

        .schedule-grid {
          display: grid;
          gap: var(--ddd-spacing-4);
          margin-top: var(--ddd-spacing-4);
        }

        .schedule-item {
          border-left: 6px solid #3b1f0f;
          background: #f7f0e8;
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-sm);
        }

        .date {
          font-size: var(--ddd-font-size-s);
          font-weight: bold;
          text-transform: uppercase;
          color: #7a3f16;
          margin-bottom: var(--ddd-spacing-2);
        }

        .title {
          font-size: var(--ddd-font-size-l);
          font-weight: bold;
          margin-bottom: var(--ddd-spacing-1);
        }
      `,
    ];
  }

  render() {
    return html`
      <section class="schedule">
        <h2>Competition Schedule</h2>
        <div class="schedule-grid">
          <div class="schedule-item">
            <div class="date">April 5, 2026</div>
            <div class="title">Easter Tournament</div>
            <div>Pennsylvania • Team Duals • Ages 5–18</div>
          </div>

          <div class="schedule-item">
            <div class="date">July 4, 2026</div>
            <div class="title">4th of July Tournament</div>
            <div>Pennsylvania • Team and Individual • Ages 5–18</div>
          </div>

          <div class="schedule-item">
            <div class="date">September 7, 2026</div>
            <div class="title">Labor Day Tournament</div>
            <div>Pennsylvania • Individual • Ages 5–18</div>
          </div>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(OompaSchedule.tag, OompaSchedule);