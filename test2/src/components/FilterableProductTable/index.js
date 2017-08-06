import React, { Component } from 'react';

import './index.css';

import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

// import PRODUCTS from '../../utils/PRODUCTS';

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default FilterableProductTable;
