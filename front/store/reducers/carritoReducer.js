import { SET_CART, REM_CART, QUANTITY_DOWN, QUANTITY_UP } from '../../utils/constants'
import { array } from 'prop-types';

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CART: {
            return Object.assign({}, state, {
                products: [...state.products, action.carrito]
            })
        }
        case REM_CART: {
            if (action.carrito)
                return Object.assign({}, state, {
                    products: action.carrito
                })
            else {
                return Object.assign({}, state, {
                    products: state.products
                })
            }
        }
        case QUANTITY_UP: {
            let index = state.products.findIndex(product => product.id == action.id)
            const selectedProduct = state.products[index]
            if (!selectedProduct.quantity) selectedProduct.quantity = 2
            else selectedProduct.quantity += 1
            return Object.assign({}, state, {
                products: [...state.products.slice(0, index), selectedProduct, ...state.products.slice(index)]
            })
        }
        default:
            return state;
    }
}


// [...array.slice(0, i), product, ...array.slice(i)]