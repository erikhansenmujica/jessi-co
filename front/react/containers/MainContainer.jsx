import React, { Component } from "react";
import Main from "../components/Main";
import { connect } from "react-redux";
import { remCart } from "../../store/actions/getCarrito";


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
 
 componentDidMount(){
    if(!this.props.carrito[0]&&sessionStorage.getItem('product')[0])this.props.addOldCart(JSON.parse(sessionStorage.getItem('product')));

 }
 componentDidUpdate(){
    this.props.carrito[0]&&sessionStorage.setItem("product",JSON.stringify(this.props.carrito))

 }
  render() {
    return (
      <Main />
    );
  }
}

const mapStateToProps = ({ carrito }) => ({
    carrito: carrito.products
  });
  const mapDispatchToProps = dispatch => {
    return {
      addOldCart: product => dispatch(remCart(product))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContainer);