import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CHANGE_FILTER_TEXT,
  CHANGE_IN_STOCK_ONLY
} from '../utils/actionTypes';
import { LOADING, SUCCESS, FAILURE } from '../utils/fetchStatus';

const initState = {
  status: LOADING,
  filterText: '',
  inStockOnly: false,
  products: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        status: LOADING
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        status: SUCCESS,
        products: action.products
      };
    case FETCH_FAILURE:
      return {
        ...state,
        status: FAILURE
      };
    case CHANGE_FILTER_TEXT:
      return {
        ...state,
        filterText: action.filterText
      };
    case CHANGE_IN_STOCK_ONLY:
      return {
        ...state,
        inStockOnly: action.inStockOnly
      };
    default:
      return state;
  }
};
