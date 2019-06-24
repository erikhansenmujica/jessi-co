import { SET_CART, REM_CART, QUANTITY_DOWN, QUANTITY_UP } from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

export const setCart = (carrito) => {
    return {
        type: SET_CART,
        carrito
    }
}
export const remCart = (carrito) => ({
    type: REM_CART,
    carrito
})

export const quantityUp = (quantity) => ({
    type: QUANTITY_UP,
    quantity
})

export const fetchCarrito = (user) =>
    Axios.get(`/api/carrito/${user.id}`)
        .then(carrito => store.dispatch(setCart(carrito)))



// GG 6/19 - QUEDA DEFINIR (ENTRE OTRAS COSAS) COMO ES EL MODELO CARRITO // 
// Y POR ENDE COMO REALIZAR EL AXIOS.GET UNA VEZ QUE USUARIO LOGUEADO //
