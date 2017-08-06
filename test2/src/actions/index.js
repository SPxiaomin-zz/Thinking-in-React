import { CHANGE_FILTER_TEXT, CHANGE_IN_STOCK_ONLY } from '../utils/actionTypes';

const changeFilterText = (filterText) => {
  return {
    type: CHANGE_FILTER_TEXT,
    filterText
  };
};

const changeInStockOnly = (inStockOnly) => {
  return {
    type: CHANGE_IN_STOCK_ONLY,
    inStockOnly
  };
};

export {
  changeFilterText,
  changeInStockOnly
};
