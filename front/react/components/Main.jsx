import React from "react";
import { Redirect, Switch, Router } from "react-router-dom";
import HomeContainer  from "../containers/HomeContainer";
import ProductsContainer from "../containers/ProductsContainer";

export default () => {
  return (
    <div>
        <ProductsContainer/>
    </div>
  );
};
