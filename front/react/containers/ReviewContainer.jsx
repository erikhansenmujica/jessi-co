import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { addProduct } from "../../store/actions/getProducts";
import Reviews from "../components/Reviews";
import {fetchProductReviewsById} from '../../store/actions/getProducts'
import Axios from 'axios'

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewInput: "",
      ratingInput: 0
    };

    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleReviewChange(e) {
    var reviewInput = e.target.value;
    this.setState({ reviewInput: reviewInput });
  }

  handleRatingChange(e) {
    e.preventDefault()
    console.log(e)
    var ratingInput = e.target.value;
    this.setState({ ratingInput: ratingInput });
  }

  handleSubmitChange(e) {
    e.preventDefault();
    let review = this.state.reviewInput;
    let rating = this.state.ratingInput
    let productId = this.props.product.id;
    console.log(this.state.ratingInput)
    if (this.state.reviewInput) {
      Axios.post("/api/reviews/addreview", { review, rating, productId })
      .then((e)=> {
        console.log(e.data)
        this.props.fetchProductReviewsById(productId)
      });
    }else console.log("no devolvi nada!!!!")
  }

  render() {
    console.log(this.state)

    return (
      <Reviews
        reviews={this.props.product.reviews}
        rating={this.props.product.rating}
        handleReviewChange={this.handleReviewChange}
        handleSubmitChange={this.handleSubmitChange}
        handleRatingChange={this.handleRatingChange}
      />
    );
  }
}
const mapStateToProps = ({ products }) => ({
    product: products.product
});

const mapDispatchToProps = dispatch => ({
  fetchProductReviewsById: fetchProductReviewsById

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewContainer);