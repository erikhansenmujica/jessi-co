import React from "react";
import { connect } from "react-redux";
import AddProducts from "../components/AddProducts";

export default class addProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AddProducts />;
  }
}
