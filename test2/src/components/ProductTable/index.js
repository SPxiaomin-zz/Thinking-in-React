import React, { Component } from 'react';

import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [{
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Footerball'
      }]
    };
  }

  render() {
    let products = this.state.products;
    let rows = [];
    let lastCategory = 'null';

    products.forEach((product) => {
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
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ProductTable;
