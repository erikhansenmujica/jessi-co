import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import {setCart,remCart} from "../../store/actions/getCarrito";
import Axios from "axios"

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToCarrito = this.addToCarrito.bind(this);
    this.remFromCarrito = this.remFromCarrito.bind(this);
  }

  addToCarrito(product) {
    this.props.setCart(product);
    Axios.post("/api/carrito/storageCarrito",this.props.carrito)

  }
  remFromCarrito(product) {
    this.props.remCart(product);
    Axios.post("/api/carrito/storageCarrito",this.props.carrito)
  }

  render() {
    return (
      <SingleProduct
        product={this.props.product}
        setCart={this.addToCarrito}
        remCart={this.remFromCarrito}
      />
    );
  }
}

const mapStateToProps = ({ products, carrito }) => ({
  product: products.product,
  carrito: carrito.products
});

const mapDispatchToProps = dispatch => ({
  setCart: product => dispatch(setCart(product)),
  remCart: product => dispatch(remCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
