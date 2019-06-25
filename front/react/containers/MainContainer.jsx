import React, { Component } from "react";
import Main from "../components/Main";
import { connect } from "react-redux";
import { remCart } from "../../store/actions/getCarrito";
import { fetchLoggedUser } from "../../store/actions/logUser";
import Axios from "axios"

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
 
 componentDidMount(){
    !sessionStorage.getItem('product')&&sessionStorage.setItem('product',JSON.stringify(this.props.carrito))
    if(!this.props.carrito[0]&&sessionStorage.getItem('product')[0])this.props.addOldCart(JSON.parse(sessionStorage.getItem('product')));
    this.props.addLoggedUser()
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
    carrito: carrito.products,
    
  });
  const mapDispatchToProps = dispatch => {
    return {
      addOldCart: product => dispatch(remCart(product)),
      addLoggedUser:fetchLoggedUser
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContainer);
  