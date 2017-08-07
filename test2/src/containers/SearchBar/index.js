import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar';

import { changeFilterText, changeInStockOnly } from '../../actions';

const mapStateToProps = (state) => {
  return {
    filterText: state.filterText,
    inStockOnly: state.inStockOnly
  };
};

const mapDispatchToProps = (dispatch) => {
  const changeFilterTextProps = (filterText) => {
    dispatch(changeFilterText(filterText));
  };
  const changeInStockOnlyProps = (inStockOnly) => {
    dispatch(changeInStockOnly(inStockOnly));
  };

  return {
    changeFilterTextProps,
    changeInStockOnlyProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
