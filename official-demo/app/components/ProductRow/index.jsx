import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const nameTemp = this.props.stocked ?
      this.props.name :
      <span style={{ color: 'red' }}>
        {this.props.name}
      </span>;

    return (
      <tr>
        <td>{nameTemp}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
