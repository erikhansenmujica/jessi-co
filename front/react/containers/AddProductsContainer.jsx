import React from "react";
import AddProducts from "../components/AddProducts";
import Axios from "axios";

export default class addProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      images: "",
      price: "",
      stock: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
