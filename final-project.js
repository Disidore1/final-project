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

export class FinalProject extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "final-project";
  }

  constructor() {
    super();
    this.title = "";
    this.currentPage = this.getPageFromUrl();
    this.menuItems = [];
    this.scheduleItems = [];

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

    this.media = [
      {
        title: "Training Day Highlights",
        description:
          "Photos and updates from off-season training and live wrestling sessions.",
        date: "March 2026",
        imageLabel: "Training Media",
      },
      {
        title: "Tournament Weekend Recap",
        description:
          "A gallery card for match photos, results, and event coverage from the team's latest competition.",
        date: "April 2026",
        imageLabel: "Tournament Media",
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

  connectedCallback() {
    super.connectedCallback();
    globalThis.addEventListener("popstate", this.handlePopState);
    this.loadMenu();
    this.loadSchedule();
  }

  disconnectedCallback() {
    globalThis.removeEventListener("popstate", this.handlePopState);
    super.disconnectedCallback();
  }

  handlePopState = () => {
    this.currentPage = this.getPageFromUrl();
  };

async loadMenu() {
  try {
    const response = await fetch("/api/menu");
    if (!response.ok) {
      throw new Error("Menu request failed");
    }
    const data = await response.json();
    this.menuItems = data.items || [];
  } catch (e) {
    console.error("Failed to load menu, using fallback menu", e);
    this.menuItems = [
      { id: "home", title: "Home", slug: "home" },
      { id: "schedule", title: "Schedule", slug: "schedule" },
      { id: "wrestlers", title: "Wrestlers", slug: "wrestlers" },
      { id: "media", title: "Media", slug: "media" },
      {
        id: "more",
        title: "More",
        slug: "more",
        children: [
          { id: "about", title: "About", slug: "home" },
          { id: "events", title: "Events", slug: "schedule" },
        ],
      },
    ];
  }
}

async loadSchedule() {
  try {
    const response = await fetch("/api/schedule");
    if (!response.ok) {
      throw new Error("Schedule request failed");
    }
    const data = await response.json();
    this.scheduleItems = data.items || [];
  } catch (e) {
    console.error("Failed to load schedule, using fallback schedule", e);
    this.scheduleItems = [
      {
        title: "Easter Tournament",
        date: "April 5, 2026",
        location: "Pennsylvania",
        type: "Team Duals",
        ages: "5–18",
      },
      {
        title: "4th of July Tournament",
        date: "July 4, 2026",
        location: "Pennsylvania",
        type: "Team and Individual",
        ages: "5–18",
      },
      {
        title: "Labor Day Tournament",
        date: "September 7, 2026",
        location: "Pennsylvania",
        type: "Individual",
        ages: "5–18",
      },
    ];
  }
}

  getPageFromUrl() {
    const params = new URLSearchParams(globalThis.location.search);
    return params.get("page") || "home";
  }

  goToPage(page) {
    const url = new URL(globalThis.location.href);
    url.searchParams.set("page", page);
    globalThis.history.pushState({}, "", url);
    this.currentPage = page;
  }

  handleNavigatePage(e) {
    const page = e.detail?.page || "home";
    this.goToPage(page);
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentPage: { type: String },
      menuItems: { type: Array },
      scheduleItems: { type: Array },
      wrestlers: { type: Array },
      events: { type: Array },
      media: { type: Array },
    };
  }

  static get styles() {
    return [
      super.styles,
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
      `,
    ];
  }

  renderHomePage() {
    return html`
      <oompa-hero
        @view-schedule=${() => this.goToPage("schedule")}
        @view-wrestlers=${() => this.goToPage("wrestlers")}
      ></oompa-hero>

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

      <h2 class="section-title">Upcoming Events</h2>
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

      <oompa-author-profile></oompa-author-profile>
    `;
  }

  renderSchedulePage() {
    return html`
      <oompa-hero
        @view-schedule=${() => this.goToPage("schedule")}
        @view-wrestlers=${() => this.goToPage("wrestlers")}
      ></oompa-hero>

      <h2 class="section-title">Competition Schedule</h2>
      <oompa-schedule .items=${this.scheduleItems}></oompa-schedule>

      <h2 class="section-title">Upcoming Events</h2>
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
    `;
  }

  renderWrestlersPage() {
    return html`
      <oompa-hero
        @view-schedule=${() => this.goToPage("schedule")}
        @view-wrestlers=${() => this.goToPage("wrestlers")}
      ></oompa-hero>

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
    `;
  }

  renderMediaPage() {
    return html`
      <oompa-hero
        @view-schedule=${() => this.goToPage("schedule")}
        @view-wrestlers=${() => this.goToPage("wrestlers")}
      ></oompa-hero>

      <h2 class="section-title">Media</h2>
      <div class="card-grid">
        ${this.media.map(
          (item) => html`
            <oompa-gallery-card
              title="${item.title}"
              description="${item.description}"
              date="${item.date}"
              imageLabel="${item.imageLabel}"
            ></oompa-gallery-card>
          `
        )}
      </div>
    `;
  }

  renderPage() {
    switch (this.currentPage) {
      case "schedule":
        return this.renderSchedulePage();
      case "wrestlers":
        return this.renderWrestlersPage();
      case "media":
        return this.renderMediaPage();
      case "home":
      default:
        return this.renderHomePage();
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <oompa-header
          .menuItems=${this.menuItems}
          @navigate-page=${this.handleNavigatePage}
        ></oompa-header>

        <oompa-mobile-menu
          .menuItems=${this.menuItems}
          @navigate-page=${this.handleNavigatePage}
        ></oompa-mobile-menu>

        ${this.renderPage()}

        <oompa-footer></oompa-footer>
        <slot></slot>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(FinalProject.tag, FinalProject);