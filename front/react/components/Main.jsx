import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer"
import CarritoContainer from "../containers/CarritoContainer";


export default () => {
  return (
    <div>
      <Route component={NavbarContainer} />
      <Switch>
        <Route exact path="/" component = {HomeContainer} />
        <Route exact path="/products/:name" component = {SingleProductContainer}
        />
<<<<<<< HEAD
        <Route path="/products" component = {ProductsContainer} />
=======
        <Route path="/products" component={ProductsContainer} />
        <Route exact path="/carrito" component={CarritoContainer}/>
>>>>>>> 404557269c44d9ff39cf131e80684b2288f9780f
      </Switch>
    </div>
  );
};
