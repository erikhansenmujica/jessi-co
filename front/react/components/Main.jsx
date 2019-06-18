import React from "react";
import { Redirect, Switch, Router } from "react-router-dom";
import HomeContainer  from "../containers/HomeContainer";
import Home from "./Home";
import Navbar from './Navbar';

export default () => {
  return (
    <div>
        <Navbar/>
        <HomeContainer/>

    </div>
  );
};
