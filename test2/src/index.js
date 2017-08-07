import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import FilterableProductTable from './containers/FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <FilterableProductTable />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
