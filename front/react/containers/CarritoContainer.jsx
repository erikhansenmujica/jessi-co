import React, { Component } from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import axios from "axios";

class CarritoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerEmail: "",
      buyerAdress: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAdress = this.handleAdress.bind(this);
    this.handleBuyButton = this.handleBuyButton.bind(this);
  }

  handleAdress(adress) {
    this.setState({ buyerAdress: adress });
  }
  handleEmail(email) {
    this.setState({ buyerEmail: email });
  }

  handleBuyButton() {
    axios
      .post("/api/order/neworder", {
        data: {
          email: this.state.buyerEmail,
          adress: this.state.buyerAdress,
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
        handleAdress={this.handleAdress}
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

export default connect(
  mapStateToProps,
  null
)(CarritoContainer);
