import { ADD_CART } from '../../utils/constants';

const initialState = {
    carrito: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART: {
            return Object.assign({}, state, { carrito: [...state, action.product] })
        }
        default:
            return state;
    }
}