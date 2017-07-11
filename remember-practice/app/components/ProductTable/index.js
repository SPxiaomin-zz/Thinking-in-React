import React, { Component } from 'react';

import ProductCategoryRow from '../ProductCategoryRow'
import ProductRow from '../ProductRow';

class ProductTable extends Component {
  render() {
    let lastCategory = '';
    let rows = [];

    this.props.products.forEach(product => {
      if ((product.name.indexOf(this.props.filterText) === -1) || (this.props.inStockOnly && !product.stocked)) {
        return ;
      }

      if (product.category !== lastCategory) {
        lastCategory = product.category;
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
      }

      rows.push(<ProductRow key={product.name} product={product} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
