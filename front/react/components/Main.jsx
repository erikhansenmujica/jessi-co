import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
//import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer"

export default () => {
  return (
    <div>
      {/* <NavbarContainer /> */}
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route
          exact
          path="/products/:name"
          component={SingleProductContainer}
        />
        <Route path="/products" component={ProductsContainer} />
      </Switch>
    </div>
  );
};
