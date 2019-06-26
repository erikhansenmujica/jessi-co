import React from "react";
import Order from "../components/Order";
import Axios from "axios";
// import { fetchOrder } from "../../store/actions/getOrders";
// import { connect } from "react-redux";

export default class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: ""
    };
  }
  componentDidMount() {
    return Axios.get("/api/order").then(response => {
      this.setState({ order: response.data });
    });
  }

  render() {
    return <Order order={this.state.order}/>;
  }
}
