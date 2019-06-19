import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
<<<<<<< HEAD
//import NavbarContainer from "../containers/NavbarContainer";
=======
// import NavbarContainer from "../containers/NavbarContainer";
>>>>>>> 7a05ac69031161441e2342e7709a51e56dbaf2dc
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
