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
      filterText: '',
      inStockOnly: false,
      products: []
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  componentDidMount() {
    $.get('http://localhost:3000', (data) => {
      this.setState({
        products: data.PRODUCTS
      });
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
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
