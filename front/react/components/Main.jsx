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
<<<<<<< HEAD
import Admin from './Admin'
import ProfileUser from "./ProfileUser";
=======
import Admin from "./Admin";
>>>>>>> 84d0367233e8e45a4ffcaba8b6fd322792310b5d

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
<<<<<<< HEAD
        <Route path ='/order' component={OrderContainer} />
        <Route path = '/profile' component = {ProfileUser} />
=======
        <Route path="/order" component={OrderContainer} />
>>>>>>> 84d0367233e8e45a4ffcaba8b6fd322792310b5d
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};
