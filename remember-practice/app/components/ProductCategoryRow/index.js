import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        {/* TODO: 在 tbody 中一样可以使用 th ? */}
        <th colSpan="2">Sporting Goods</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
