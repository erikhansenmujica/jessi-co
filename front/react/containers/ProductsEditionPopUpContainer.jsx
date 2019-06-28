import React from "react";
import {addProducts} from "../../store/actions/getProducts";
import { connect } from "react-redux";
import Axios from "axios";
import ProductsEditionPopUp from "../components/ProductsEditionPopUp";
class ProductsEditionPopUpContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            stock: "",
            description: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        $("select").selectpicker();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {
        return Axios.post("/api/products/things/update", {
            id: this.props.id,
            name: this.state.name,
            price: parseInt(this.state.price),
            stock: parseInt(this.state.stock),
            description: this.state.description,
        })
            .then((products) =>{
                this.props.addProducts(products.data)        
                alert('Product Updated!')
            })
    }

    render() {
        return (
            <ProductsEditionPopUp
            id={this.props.id}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
            />
        );
    }
}
const mapStateToProps = store => ({
    cat: store.categories.cats
});
const mapDispatchToProps = dispatch=>({
    addProducts: prod=>dispatch(addProducts(prod))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsEditionPopUpContainer);
