import React from "react";
import { Redirect, Switch, Router } from "react-router-dom";
import HomeContainer  from "../containers/HomeContainer";
import Home from "./Home";
import NavbarContainer from '../containers/NavbarContainer';

export default () => {
  return (
    <div>
        <NavbarContainer/>
        <HomeContainer/>

    </div>
  );
};
