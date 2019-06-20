import React from 'react';
import Navbar from '../components/Navbar';
import { fetchProductsByName } from '../../store/actions/getProducts';
import ProductsContainer from './ProductsContainer';
import products from '../../store/reducers/products';

export default class NavbarContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSearch (e) {
        const inputValue = e.target.value;
        this.setState({inputValue: inputValue})
    }
    handleSubmit (e) {
        e.preventDefault();
        if (this.state.inputValue) {
            fetchProductsByName(this.state.inputValue)
            this.props.history.push("/products")
        }
        
    }
    render (){
        return (
            <Navbar 
            handleSearch = {this.handleSearch}
            handleSubmit = {this.handleSubmit}
            />
        )
    }
}
