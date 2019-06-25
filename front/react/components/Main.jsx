import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import CarritoContainer from "../containers/CarritoContainer";
import AddProductsContainer from "../containers/AddProductsContainer"

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
        <Route path="/category/:name" component={ProductsContainer} />
        <Route exact path="/carrito" component={CarritoContainer} />
        <Route path="/add" component={AddProductsContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};
