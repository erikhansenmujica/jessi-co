import React, { Component } from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import axios from "axios";
import { quantityUp } from "../../store/actions/getCarrito";

class CarritoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerEmail: "",
      buyerAddress: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleBuyButton = this.handleBuyButton.bind(this);
  }
  handleAddress(address) {
    this.setState({ buyerAddress: address });
  }
  handleEmail(email) {
    this.setState({ buyerEmail: email });
  }

  handleBuyButton() {
    axios
      .post("/api/order", {
        data: {
          email: this.state.buyerEmail,
          address: this.state.buyerAddress,
          carrito: this.props.carrito
        }
      })
      .then(res => {
        if (res.data.msg === "success") {
          alert("Order created.");
          this.props.history.push("/");
        } else if (res.data.msg === "fail") {
          alert("Order failed.");
        }
      });
  }

  render() {
    return (
      <Carrito
        carrito={this.props.carrito}
        handleBuyButton={this.handleBuyButton}
        handleAddress={this.handleAddress}
        handleEmail={this.handleEmail}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = ({ carrito }) => {
  return {
    carrito: carrito.products
  };
};

const mapDispatchToProps = dispatch => ({
  quantityUp: id => dispatch(quantityUp(id)),
  
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarritoContainer);
