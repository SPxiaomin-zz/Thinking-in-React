import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    let product = this.props;
    let name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
