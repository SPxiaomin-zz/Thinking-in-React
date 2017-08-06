import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.filterText} />
        </div>
        <div>
          <input type="checkbox" id="inStockOnly" checked={this.state.inStockOnly} />
          <label htmlFor="inStockOnly">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
