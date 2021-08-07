import { createElement } from '../utils';

const createSiteNavigationTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
                <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
                <a class="trip-tabs__btn" href="#">Stats</a>
              </nav>`;

class SiteNavigationView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteNavigationTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export default SiteNavigationView;