import React from 'react';
import Navbar from '../components/Navbar';
import { fetchProductsByName } from '../../store/actions/getProducts';

class NavbarContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.hanldeSubmit = this.hanldeSubmit.bind(this);
    }
    handleSearch (e) {
        const inputValue = e.target.value;
        this.setState({inputValue: inputValue})
        console.log(this.state)
    }
    hanldeSubmit (e) {
        e.preventDefault();
        if (this.state.inputValue) {
            fetchProductsByName(this.state.inputValue)
        }
        
    }
    render (){
        return (
            <Navbar 
            handleSearch = {this.handleSearch}
            hanldeSubmit = {this.hanldeSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.products.products
});

export default connect(mapStateToProps)(NavbarContainer);