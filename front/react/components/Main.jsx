import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import CarritoContainer from "../containers/CarritoContainer";
import LogIn from "../components/LogIn";
import RegisterContainer from "../containers/RegisterContainer"

export default () => {
  return (
    <div>
      <Route component={NavbarContainer} />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/products/:name" component = {SingleProductContainer}/>
        <Route path="/register" component={RegisterContainer} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/login" component={LogIn} />
        <Route exact path="/carrito" component={CarritoContainer}/>
      </Switch>
    </div>
  );
};
