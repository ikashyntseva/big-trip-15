import AbstractView from './abstract-view';
import { Filter } from '../enums';

const createFiltersItemTemplate = (filter, selectedFilter, disabledFilters) => {
  const checked = filter === selectedFilter ? 'checked' : '';
  const disabled = disabledFilters.includes(filter) ? 'disabled' : '';

  return `<div class="trip-filters__filter">
                  <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" data-filter-type=${filter} value=${filter} ${checked} ${disabled}>
                  <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
                </div>`;
};

const createFiltersTemplate = (
  selectedFilter = Filter.EVERYTHING,
  disabled,
) => {
  const filters = Object.values(Filter);
  let disabledClass = '';

  if (typeof disabled === 'boolean') {
    disabledClass = disabled ? 'trip-controls__filters--disabled' : '';
    selectedFilter = !disabled ? selectedFilter : '';
    disabled = [];
  }

  const filterItemsTemplate = filters
    .map((filter) =>
      createFiltersItemTemplate(filter, selectedFilter, disabled),
    )
    .join('');

  return `<div class="trip-controls__filters ${disabledClass}">
            <h2 class="visually-hidden">Filter events</h2>
            <form class="trip-filters" action="#" method="get">
              ${filterItemsTemplate}
              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>
          </div>`;
};
class EventsFiltersView extends AbstractView {
  constructor(selectedFilter, disabled) {
    super();
    this._disabled = disabled;
    this._selectedFilter = selectedFilter;
    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  get selectedFilterType() {
    return this._selectedFilterType;
  }

  set selectedFilterType(filterType) {
    this._selectedFilterType = filterType;
  }

  getTemplate() {
    return createFiltersTemplate(this._selectedFilter, this._disabled);
  }

  _filterTypeChangeHandler(evt) {
    const { target } = evt;
    const { tagName, dataset } = target;

    if (tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this._callback.filterTypeChange(dataset.filterType);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener('change', this._filterTypeChangeHandler);
  }
}

export default EventsFiltersView;
