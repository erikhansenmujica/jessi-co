import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import {setCart,remCart} from "../../store/actions/getCarrito";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToCarrito = this.addToCarrito.bind(this);
    this.remFromCarrito = this.remFromCarrito.bind(this);
  }

  addToCarrito(product) {
    this.props.setCart(product);
  }
  remFromCarrito(product) {
    const newArr=this.props.carrito.filter(prod=>prod.id!==product.id)
    this.props.remCart(newArr);
    sessionStorage.setItem("product",JSON.stringify(newArr))
  }

  render() {
    console.log(this.props.carrito)
    

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
