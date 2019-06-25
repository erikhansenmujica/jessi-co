import {  combineReducers} from "redux";
import productsReducer from './products'
import carritoReducer from './carritoReducer'
import userReducer from './userReducer'
import orderReducer from './order'

export default combineReducers({
    products : productsReducer,
    carrito : carritoReducer,
    user:userReducer, 
    orders: orderReducer
})