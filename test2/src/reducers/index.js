import { CHANGE_FILTER_TEXT, CHANGE_IN_STOCK_ONLY } from '../utils/actionTypes';

const initState = {
  filterText: '',
  inStockOnly: false,
  products: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_TEXT:
      // TODO: stop writing here
    default:
      return state;
  }
};
