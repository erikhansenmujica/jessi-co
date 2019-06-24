import { SET_CART, REM_CART, QUANTITY_DOWN, QUANTITY_UP } from '../../utils/constants';

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
        default:
            return state;
    }
}


