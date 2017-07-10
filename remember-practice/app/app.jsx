import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import FilterableProductTable from './components/FilterableProductTable';

const app = document.createElement('div');
document.body.appendChild(app);
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    app
  );
};

render(FilterableProductTable);

if (module.hot) {
  module.hot.accept('./components/FilterableProductTable', () => {
    render(FilterableProductTable);
  });
}
