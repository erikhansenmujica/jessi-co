import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SingleProduct product={this.props.product} />;
  }
}

const mapStateToProps = ({ products }) => ({
  product: products.product
});

export default connect(mapStateToProps)(SingleProductContainer);
