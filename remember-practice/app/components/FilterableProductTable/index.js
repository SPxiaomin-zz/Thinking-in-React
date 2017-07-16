import React, { Component } from 'react';
import $ from 'jquery';

import './index.scss';

import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

// import PRODUCTS from '../../utils/PRODUCTS';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filterText: '',
      inStockOnly: false
    };

    this.changeFilterText = this.changeFilterText.bind(this);
    this.changeInStockOnly = this.changeInStockOnly.bind(this);
  }

  changeFilterText(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  changeInStockOnly(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  componentDidMount() {
    $.get('http://localhost:3000/', (products) => {
      this.setState({
        products: products.PRODUCTS
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          changeFilterText={this.changeFilterText}
          changeInStockOnly={this.changeInStockOnly}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
