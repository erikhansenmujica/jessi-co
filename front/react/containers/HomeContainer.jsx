import React from "react";
import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/getProducts";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        <Home products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: products => dispatch(fetchProducts(products))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
