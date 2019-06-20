import {  combineReducers} from "redux";
import productsReducer from './products'
import carritoReducer from './carritoReducer'
import userReducer from './userReducer'

export default combineReducers({
    products : productsReducer,
    carrito : carritoReducer,
    user:userReducer
})