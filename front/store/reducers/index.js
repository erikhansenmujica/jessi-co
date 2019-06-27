import {  combineReducers} from "redux";
import productsReducer from './products'
import carritoReducer from './carritoReducer'
import userReducer from './userReducer'
import categoriesReducer from './categoriesReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    products : productsReducer,
    carrito : carritoReducer,
    user:userReducer,
    users: usersReducer,
    categories:categoriesReducer,
})