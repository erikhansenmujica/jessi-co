import {  combineReducers} from "redux";
import productsReducer from './products'
import carritoReducer from './carritoReducer'
import userReducer from './userReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
    products : productsReducer,
    carrito : carritoReducer,
    user:userReducer,
    categories:categoriesReducer
})