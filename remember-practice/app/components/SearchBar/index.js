import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" placeholder="Search..." value={this.props.filterText} onChange={(event) => {
            this.props.changeFilterText(event.target.value);
          }} />
        </div>
        <p>
          <input id="inStockCheckBox" type="checkbox" checked={this.props.inStockOnly} onChange={(event) => {
            this.props.changeInStockOnly(event.target.checked);
          }} />
          {' '}
          <label htmlFor="inStockCheckBox">Only show products in stock</label>
        </p>
      </form>
    );
  }
}

export default SearchBar;
