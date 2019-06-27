import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import { setCart, remCart, addUserCart } from "../../store/actions/getCarrito";
import Axios from "axios";
import { fetchProductReviewsById } from "../../store/actions/getProducts";
import ReviewContainer from "./ReviewContainer";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      reviews: [],
      userBought: false
    };
    this.addToCarrito = this.addToCarrito.bind(this);
    this.remFromCarrito = this.remFromCarrito.bind(this);
  }
  componentDidMount() {
    Axios.get(`/api/order/${this.props.user.id}`).then(products => {
      if (products.data.includes(this.props.product))
        this.setState({ userBought: true });
    });
  }

  addToCarrito(product) {
    var arr = this.props.carrito.filter(prod => prod.id === product.id);
    if (!arr.length) {
      if (this.props.user.id > 0) {
        Axios.post(`/api/carrito/products/${this.props.user.id}`, { product: product });
      }
      this.props.setCart(product);
      alert("Producto agregado al carrito");
    } else alert("Modifique la cantidad desde el carrito.");
  }

  remFromCarrito(product) {
    const newArr = this.props.carrito.filter(prod => prod.id !== product.id);
    this.props.remCart(newArr);
    sessionStorage.setItem("product", JSON.stringify(newArr));
  }

  render() {
    return (
      <div>
        <SingleProduct
          product={this.props.product}
          setCart={this.addToCarrito}
          remCart={this.remFromCarrito}
        />
        <ReviewContainer userBought={this.state.userBought} />
      </div>
    );
  }
}

const mapStateToProps = ({ products, carrito, user }) => ({
  product: products.product,
  carrito: carrito.products,
  user: user.user
});

const mapDispatchToProps = dispatch => ({
  setCart: product => dispatch(setCart(product)),
  remCart: product => dispatch(remCart(product)),
  fetchProductReviewsById: product => dispatch(fetchProductReviewsById(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
