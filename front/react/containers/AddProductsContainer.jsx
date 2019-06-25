import React from "react";
import AddProducts from "../components/AddProducts";
import { connect } from "react-redux";
import Axios from "axios";

class addProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      images: "",
      price: "",
      stock: "",
      categories:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
  }
  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleCatChange(e) {
    console.log(document.querySelectorAll(".selected").map(cosa=>cosa[0]==="l"))
    this.setState({
      categories: [...this.state.categories, e.target.value]
    });
    console.log(this.state.categories, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    var arr = [];
    var images = this.state.images.split(", ");
    images.forEach(img => {
      arr.push(img);
    });
    return Axios.post("/api/product/add", {
      name: this.state.name,
      price: parseInt(this.state.price),
      stock: parseInt(this.state.stock),
      description: this.state.description,
      images: arr,
      
    });
  }

  render() {

    return (
      <AddProducts
        cat={this.props.cat}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleCatChange={this.handleCatChange}
      />
    );
  }
}
const mapStateToProps = (store)=>({
    cat:store.categories.cats
})

export default connect(mapStateToProps)(addProducts)