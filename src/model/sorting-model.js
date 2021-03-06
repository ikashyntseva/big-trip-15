import AbstractObserver from '../utils/abstract-observer';
import { DEFAULT_SORTING } from '../const';

class SortingModel extends AbstractObserver {
  constructor() {
    super();
    this._activeSorting = DEFAULT_SORTING;
  }

  setSorting(sortType) {
    this._activeSorting = sortType;
  }

  getSorting() {
    return this._activeSorting;
  }
}

export default SortingModel;
