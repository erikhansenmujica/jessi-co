import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import CarritoContainer from "../containers/CarritoContainer";
<<<<<<< HEAD
import LogIn from "../components/LogIn";
import RegisterContainer from "../containers/RegisterContainer";
import AddProductsContainer from "../containers/AddProductsContainer";
import { remCart } from "../../store/actions/getCarrito";
import { connect } from "react-redux";

const Main = props => {
  !props.carrito[0] &&
    props.addOldCart(JSON.parse(sessionStorage.getItem("product")));
  props.carrito[0] &&
    sessionStorage.setItem("product", JSON.stringify(props.carrito));
=======



>>>>>>> 364b5596db7375bffa7d7b8ec7625a4432d9af67

export default () => {
  return (
    <div>
      <Route component={NavbarContainer} />
      <Switch>
        <Route
          exact
          path="/products/:name"
          component={SingleProductContainer}
        />
        <Route path="/products" component={ProductsContainer} />
        <Route exact path="/carrito" component={CarritoContainer} />
        <Route path="/add" component={AddProductsContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};

