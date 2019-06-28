import { ADD_ORDERS } from "../../utils/constants"
import Axios from "axios";

const addOrders = (orders) => ({
    type: ADD_ORDERS,
    orders
})

export const fetchOrders = () =>
    (dispatch) =>
        Axios.get("/api/order/all").then(response => {
            dispatch(addOrders(response.data))
        })

export const updateOrder = (statusAndId) =>
    (dispatch) =>
        Axios.post("/api/order/update", statusAndId).then(res =>
            dispatch(addOrders(res.data))
        )
