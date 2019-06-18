import React, { Component } from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import fetchCarrito from "../../store/actions/getCarrito"

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
    carrito: state.carrito
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
      fetchCarrito: (cart) => dispatch(fetchCarrito(cart)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarritoContainer);
