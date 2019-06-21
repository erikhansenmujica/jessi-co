import {SET_CART, REM_CART} from '../../utils/constants'

const initialState ={
    products: []
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case SET_CART: {
            return Object.assign({}, state, {
                products : [...state.products, action.carrito]
            })
        }
        case REM_CART: {
            const newArr=state.products.filter(prod=>prod!==action.carrito)
            return Object.assign({}, state, {
                products : newArr
            })
        }
        default:
            return state;
    }
}


