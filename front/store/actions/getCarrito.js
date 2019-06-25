import { SET_CART, REM_CART, QUANTITY_DOWN, QUANTITY_UP, DELETE_PRODUCT } from "../../utils/constants"
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

export const quantityUp = (id) => ({
    type: QUANTITY_UP,
    id
})

export const quantityDown = (id) => ({
    type: QUANTITY_DOWN,
    id
})


export const deleteSingleProduct = (id) => ({
    type: DELETE_PRODUCT,
    id
})

// export const addUserCart = (userId) =>
//     Axios.post(`/api/carrito/${userId}`)
//         .then(carrito => store.dispatch(setCart(carrito)))


export const fetchCarrito = (user) =>
    Axios.get(`/api/carrito/${user.id}`)
        .then(carrito => store.dispatch(setCart(carrito)))

