import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import CarritoContainer from "../containers/CarritoContainer";
import AddProductsContainer from "../containers/AddProductsContainer";
import OrderContainer from "../containers/OrderContainer";
import ListOfUsersContainer from "../containers/ListOfUsersContainer";
import Admin from './Admin'
import ProfileUserContainer from "../containers/ProfileUserContainer";

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
        <Route path="/admin" component={Admin} />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/users" component={ListOfUsersContainer} />
        <Route exact path="/category/:name" component={ProductsContainer} />
        <Route exact path="/carrito" component={CarritoContainer} />
        <Route path="/add" component={AddProductsContainer} />
        <Route path ='/order' component={OrderContainer} />
        <Route path = '/profile' component = {ProfileUserContainer} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};
