import React from 'react';
import Navbar from '../components/Navbar';
import { fetchProductsByName } from '../../store/actions/getProducts';
// import ProductsContainer from './ProductsContainer';
// import products from '../../store/reducers/products';
import { connect } from 'react-redux';

class NavbarContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectHome = this.redirectHome.bind(this);
    }
    handleSearch (e) {
        const inputValue = e.target.value;
        this.setState({inputValue: inputValue})
        console.log(this.state)
    }
    handleSubmit (e) {
        e.preventDefault();
        if (this.state.inputValue) {
            fetchProductsByName(this.state.inputValue)
            this.props.history.push("/products")
        }
    }
    redirectHome () {
        return this.props.history.push('/')
    }
        
    
    render (){
        return (
            <Navbar 
            handleSearch = {this.handleSearch}
            handleSubmit = {this.handleSubmit}
            redirectHome = {this.redirectHome}
            carrito= {this.props.carrito}
            />
        )
    }
}

const mapStateToProps = ({carrito}) => {
    return {
        carrito: carrito.products
    }
}

export default connect(mapStateToProps)(NavbarContainer)