import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import axios from "axios";
import {addToCart} from "../../store/actions/getCarrito";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addToCarrito = this.addToCarrito.bind(this);
  }
  // componentDidMount(){
  //   axios.get('/api/products/id/1')
  //     .then((product)=> {
  //      this.setState({producto: product})
  //     })
  // }
  addToCarrito(product) {
    this.props.addToCart(product);
  }

  render() {
    return (
      <SingleProduct
        product={this.props.producto}
        addToCart={this.addToCarrito}
      />
    );
  }
}

const mapStateToProps = ({ products }) => ({
  product: products.product
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
