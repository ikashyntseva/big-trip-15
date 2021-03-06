import dayjs from 'dayjs';
import { EventType, Filter, Sorting } from './enums';

const AUTHORIZATION = 'Basic 1GmbiMbGFn';
const END_POINT = 'https://15.ecmascript.pages.academy/big-trip';

const MIN_DESTINATIONS_TO_SHOW = 1;
const DESTINATIONS_TO_SHOW = 3;

const SHAKE_ANIMATION_TIMEOUT = 600;

const DEFAULT_FILTER = Filter.EVERYTHING;
const DEFAULT_SORTING = Sorting.DAY;
const BLANK_EVENT = { eventType: EventType.TAXI, destination: { name: '' }, startDate: dayjs(), endDate: dayjs(), price: '', offers: [] };

const STORE_PREFIX = 'big-trip-localstorage';
const STORE_VER = 'v15';
const STORE_NAME = `${STORE_PREFIX}-${STORE_VER}`;

export { AUTHORIZATION, END_POINT, DEFAULT_FILTER, MIN_DESTINATIONS_TO_SHOW, DEFAULT_SORTING, BLANK_EVENT, DESTINATIONS_TO_SHOW, SHAKE_ANIMATION_TIMEOUT, STORE_NAME };
