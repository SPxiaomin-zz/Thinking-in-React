import { connect } from 'react-redux';

import FilterableProductTable from '../../components/FilterableProductTable';

import { fetchProducts } from  '../../actions';

const mapStateToProps = (state) => {
  return {
    status: state.status
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterableProductTable);
