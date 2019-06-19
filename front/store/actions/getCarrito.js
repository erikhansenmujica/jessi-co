import {SET_CART} from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

const setCart = (carrito)=>({
    type: SET_CART,
    carrito
})

export const fetchCarrito = (user)=> 
Axios.get(`/api/carrito/${user.id}`)  
.then(carrito=>store.dispatch(setCart(carrito)))



// GG 6/19 - QUEDA DEFINIR (ENTRE OTRAS COSAS) COMO ES EL MODELO CARRITO // 
// Y POR ENDE COMO REALIZAR EL AXIOS.GET UNA VEZ QUE USUARIO LOGUEADO //