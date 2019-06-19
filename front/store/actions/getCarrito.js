import store from "../../store/index";
import { ADD_CART } from '../../utils/constants';
import Axios from "axios";


export  const addToCart = (product) => ({
    type: ADD_CART,
    products
})


// Post a DB del producto. 
// const addProductToCart = () => {
//     Axios.post...
// }
