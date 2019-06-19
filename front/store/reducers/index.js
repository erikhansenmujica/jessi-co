import {  combineReducers} from "redux";
import productsReducer from './products'
import carritoReducer from './carrito'

export default combineReducers({
    products : productsReducer,
    carrito : carritoReducer
})