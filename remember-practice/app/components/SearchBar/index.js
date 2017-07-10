import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <p>
          <input type="text" placeholder="Search..." />
        </p>
        <div>
          <input id="inStockCheckBox" type="checkbox" />
          <label htmlFor="inStockCheckBox">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
