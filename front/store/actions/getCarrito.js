import {SET_CART, REM_CART} from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

export const setCart = (carrito)=>{
    return{
    type: SET_CART,
    carrito
}}
export const remCart = (carrito)=>({
    type: REM_CART,
    carrito
})



export const fetchCarrito = (user)=> 
Axios.get(`/api/carrito/${user.id}`)  
.then(carrito=>store.dispatch(setCart(carrito)))

