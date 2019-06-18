import {ADD_PRODUCTS, ADD_PRODUCT, SET_CART} from '../../utils/constants'

const initialState ={
    products:[],
    product:{},
    carrito: []
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PRODUCTS:{
            return Object.assign({}, state, {products:action.products})
        }
        case ADD_PRODUCT:{
            return Object.assign({}, state, {product:action.product})
        }
        case SET_CART:{
            return Object.assign({}, state, {product:action.carrito})
        }
        default:
            return state;
    }
}


