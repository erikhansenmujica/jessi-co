import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import CarritoContainer from "../containers/CarritoContainer";
import LogIn from "../components/LogIn";
import RegisterContainer from "../containers/RegisterContainer"
import AddProductsContainer from "../containers/AddProductsContainer"
import {remCart} from "../../store/actions/getCarrito";
import { connect } from 'react-redux';


const Main= (props) => {
  console.log(props.carrito[0])
  !props.carrito[0]&&remCart(JSON.parse(sessionStorage.getItem('product')));
  props.carrito[0]&&sessionStorage.setItem("product",JSON.stringify(props.carrito))

  return (
    <div>
      <Route component={NavbarContainer} />
      <Switch>
        <Route exact path="/products/:name" component = {SingleProductContainer}/>
        <Route path="/register" component={RegisterContainer} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/login" component={LogIn} />
        <Route exact path="/carrito" component={CarritoContainer}/>
        <Route path ="/add" component ={AddProductsContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({  carrito }) => ({
  carrito: carrito.products
});
const mapDispatchToProps = (dispatch) => {
  return {
      addOldCart: product => dispatch(remCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)