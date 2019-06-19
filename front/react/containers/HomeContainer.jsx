import React from "react";
import Home from "../components/Home";
import { connect } from "react-redux";
import { fetchProductsById } from "../../store/actions/getProducts";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products:""
    }
  }
  componentDidMount(){
    this.props.fetchProductsById(this.props.products)
  }
  render() {
    return (
      <div>
        <Home product={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  
  return {
    state: state.products, 
    productsName: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    fetchProductsById: (products)=>dispatch(fetchProductsById(products))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
