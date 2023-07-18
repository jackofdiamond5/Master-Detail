import { Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routings } from './app-routing.js';

@customElement('app-root')
export class App extends LitElement {
  static styles = css`
    router-outlet {
      width: 100%;
    }

    .outer-wrapper {
      display: flex;
      justify-content: center;
      height: 100%;
    }
  `;

  render() {
    return html`
      <div class="outer-wrapper">
        <router-outlet></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    routings.router = new Router(outlet);
    routings.router.setRoutes(routings.routes);
  }
}
