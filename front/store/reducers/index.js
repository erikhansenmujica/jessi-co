import { combineReducers } from "redux";
import productsReducer from './products';
import carritoReducer from './carritoReducer';

export default combineReducers({
    products: productsReducer,
    carrito: carritoReducer
})