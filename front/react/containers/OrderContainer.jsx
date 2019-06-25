import React from "react";
import Order from "../components/Order";
import Axios from "axios";
//import { fetchOrder } from "../../store/actions/getOrders";
import { connect } from "react-redux";

class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return <Order />;
  }
}

const mapStateToProps =(state, ownProps)=>{
    console.log(state)
    return {
        order: state.carrito
    }
}

export default connect(mapStateToProps)(OrderContainer)