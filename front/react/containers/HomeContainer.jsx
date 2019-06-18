import React from "react";
import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchProductsByCat } from "../../store/actions/getProducts";

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Home />;
  }
}

// const mapDispatchToProps=(state, ownProps)=>{
// return({
//     state:state.home
// })
// }

// export default connect(null, mapDispatchToProps)(HomeContainer)
