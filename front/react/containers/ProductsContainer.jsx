import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/Products';

class PorductsContainer extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <Products products={this.props.products}/>
        )
    }
}
const mapStateToProps = ({products})=>({
    products: products.products
})
export default connect (
    mapStateToProps
)(PorductsContainer)