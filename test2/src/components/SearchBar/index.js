import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     filterText: '',
  //     inStockOnly: false
  //   };
  // }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.props.filterText} onChange={(e) => {
            this.props.changeFilterTextProps(e.target.value);
          }} />
        </div>
        <div>
          <input type="checkbox" id="inStockOnly" checked={this.props.inStockOnly} onChange={(e) => {
            this.props.changeInStockOnlyProps(e.target.checked);
          }} />
          <label htmlFor="inStockOnly">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
