import { connect } from 'react-redux';

import ProductTable from '../../components/ProductTable';

const mapStateToProps = (state) => {
  return {
    filterText: state.filterText,
    inStockOnly: state.inStockOnly,
    products: state.products
  };
};

export default connect(mapStateToProps, null)(ProductTable);
