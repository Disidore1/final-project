/**
 * Copyright 2026 David Isidro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./lib/oompa-header.js";
import "./lib/oompa-hero.js";
import "./lib/oompa-about.js";
import "./lib/oompa-wrestler-card.js";
import "./lib/oompa-event-card.js";
import "./lib/oompa-schedule.js";
import "./lib/oompa-author-profile.js";
import "./lib/oompa-footer.js";
import "./lib/oompa-gallery-card.js";
import "./lib/oompa-mobile-menu.js";
/**
 * `final-project`
 * 
 * @demo index.html
 * @element final-project
 */
export class FinalProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "final-project";
  }

  constructor() {
    super();
    this.title = "";
    this.wrestlers = [
  {
    name: "Tony Drown",
    age: 17,
    weightClass: "165 lbs",
    record: "12-4",
    focus: "Takedown defense and conditioning",
  },
  {
    name: "Bobby Schmirda",
    age: 15,
    weightClass: "138 lbs",
    record: "9-6",
    focus: "Neutral attacks and scrambling",
  },
  {
    name: "Bon Bones",
    age: 12,
    weightClass: "95 lbs",
    record: "14-2",
    focus: "Top pressure and pinning combinations",
  },
];

this.events = [
  {
    eventName: "4th of July Tournament",
    date: "July 4, 2026",
    location: "Pennsylvania",
    eventType: "Team and Individual",
    ageGroup: "5–18",
  },
  {
    eventName: "Labor Day Tournament",
    date: "September 7, 2026",
    location: "Pennsylvania",
    eventType: "Individual",
    ageGroup: "5–18",
  },
  {
    eventName: "Easter Tournament",
    date: "April 5, 2026",
    location: "Pennsylvania",
    eventType: "Team Duals",
    ageGroup: "5–18",
  },
];
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/final-project.ar.json", import.meta.url).href +
        "/../",
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      wrestlers: { type: Array },
      events: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }

      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      h3 span {
        font-size: var(--final-project-label-font-size, var(--ddd-font-size-s));
      }

      .intro {
        margin-top: var(--ddd-spacing-6);
        padding: var(--ddd-spacing-6);
        background-color: white;
        color: #3b1f0f;
        border-radius: var(--ddd-radius-md);
      }

      .intro h1 {
        margin: 0;
        font-size: var(--ddd-font-size-xxl);
      }

      .intro p {
        font-size: var(--ddd-font-size-m);
      }
        
      .section-title {
        margin-top: var(--ddd-spacing-8);
        margin-bottom: var(--ddd-spacing-3);
        color: #3b1f0f;
        font-size: var(--ddd-font-size-xl);
        font-weight: bold;
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--ddd-spacing-4);
      }
    `];
  }

  // Lit render the HTML
render() {
  return html`
    <div class="wrapper">
      <oompa-header></oompa-header>
      <oompa-mobile-menu></oompa-mobile-menu>
      <oompa-hero></oompa-hero>
      <oompa-about></oompa-about>

      <h2 class="section-title">Featured Wrestlers</h2>
     <div class="card-grid">
        ${this.wrestlers.map(
          (wrestler) => html`
            <oompa-wrestler-card
              name="${wrestler.name}"
              age="${wrestler.age}"
              weightClass="${wrestler.weightClass}"
              record="${wrestler.record}"
              focus="${wrestler.focus}"
            ></oompa-wrestler-card>
          `
        )}
      </div>
      <oompa-schedule></oompa-schedule>
      <oompa-author-profile></oompa-author-profile>

      <h2 class="section-title">Media</h2>
      <div class="card-grid">
        ${this.events.map(
          (event) => html`
            <oompa-event-card
              eventName="${event.eventName}"
              date="${event.date}"
              location="${event.location}"
              eventType="${event.eventType}"
              ageGroup="${event.ageGroup}"
            ></oompa-event-card>
          `
        )}
      </div>

      <oompa-footer></oompa-footer>
      <slot></slot>
    </div>
  `;
}
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(FinalProject.tag, FinalProject);