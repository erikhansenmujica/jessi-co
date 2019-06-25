import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/getCategories";
import SecondNavbar from "../components/SecondNavbar";

class SecondNavbarContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      this.props.addCats()
  }
  onClick(){

  }

  render() {
    return (
        <SecondNavbar cats={this.props.cats}/>
    );
  }
}
const mapStateToProps=(state)=>({
    cats: state.categories.cats
})
const mapDispatchToProps = dispatch => {
  return {
    addCats: ()=>dispatch(fetchCategories()),
    addCats: ()=>dispatch(fetchCategories()),
  };
};

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(SecondNavbarContainer);
