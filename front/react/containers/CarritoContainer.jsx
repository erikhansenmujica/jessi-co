import React, { Component } from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";

class CarritoContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Carrito carrito={this.props.carrito} user={this.props.user}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    carrito: state.carrito.products
  };
};


export default connect(
  mapStateToProps,
  null
)(CarritoContainer);