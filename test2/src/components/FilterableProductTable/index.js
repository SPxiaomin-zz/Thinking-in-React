import React, { Component } from 'react';

import './index.css';

import SearchBar from '../../containers/SearchBar';
import ProductTable from '../../containers/ProductTable';

import { LOADING, SUCCESS, FAILURE } from '../../utils/fetchStatus';
// import PRODUCTS from '../../utils/PRODUCTS';

class FilterableProductTable extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    switch (this.props.status) {
      case LOADING:
        return <div>数据加载中...</div>;
      case SUCCESS:
        return (
          <div>
            <SearchBar />
            <ProductTable />
          </div>
        );
      case FAILURE:
        return <div>数据加载失败...</div>;
      default:
        throw new Error(`unexpected status: ${this.props.status}`);
    }
  }
}

export default FilterableProductTable;
