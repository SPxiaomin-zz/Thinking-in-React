import React, { Component } from 'react';

import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return ;
      }

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        lastCategory = product.category;
      }

      rows.push(<ProductRow {...product} key={product.name} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows.length > 0 ? rows : <tr><td colSpan={2}>数据加载中...</td></tr>}</tbody>
      </table>
    );
  }
}

export default ProductTable;
