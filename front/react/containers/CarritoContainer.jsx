import React, { Component } from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";

class CarritoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Carrito carrito={this.props.carrito} />;
  }
}

const mapStateToProps = ({carrito}) => {
  return {
    carrito: carrito.products
  };
};

export default connect(
  mapStateToProps,
  null
)(CarritoContainer);
