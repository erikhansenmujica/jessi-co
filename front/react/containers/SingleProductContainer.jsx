import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import axios from "axios";
import { setCart } from "../../store/actions/getCarrito";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToCarrito = this.addToCarrito.bind(this);
  }

  addToCarrito(product) {
    this.props.setCart(product);
  }

  render() {
    return (
      <SingleProduct product={this.props.product} setCart={this.addToCarrito} />
    );
  }
}

const mapStateToProps = ({ products }) => ({
  product: products.product
});

const mapDispatchToProps = dispatch => ({
  setCart: product => dispatch(setCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
