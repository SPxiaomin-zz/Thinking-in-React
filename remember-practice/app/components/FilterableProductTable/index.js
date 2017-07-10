import React, { Component } from 'react';

import './index.scss';

import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

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
