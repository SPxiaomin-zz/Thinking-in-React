import React, { Component } from 'react';

import './index.scss';

import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

import PRODUCTS from '../../utils/PRODUCTS';

class FilterableProductTable extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <ProductTable products={PRODUCTS} />
      </div>
    );
  }
}

export default FilterableProductTable;
