import React, { Component } from 'react';

import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(function(product) {
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
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
