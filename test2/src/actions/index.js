import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CHANGE_FILTER_TEXT,
  CHANGE_IN_STOCK_ONLY,
} from '../utils/actionTypes';

const fetchProductsStarted = () => {
  return {
    type: FETCH_STARTED,
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    products
  };
};

const fetchProductsFailure = () => {
  return {
    type: FETCH_FAILURE,
  };
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStarted());

    const apiUrl = 'http://localhost:3000';
    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error(`Fail to get response with status: ${response.status}`);
      }

      response.json().then((responseJson) => {
        dispatch(fetchProductsSuccess(responseJson.PRODUCTS));
      }).catch((error) => {
        dispatch(fetchProductsFailure());
      });
    }).catch((error) => {
      dispatch(fetchProductsFailure());
    });
  };
};

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
  fetchProducts,
  changeFilterText,
  changeInStockOnly
};
