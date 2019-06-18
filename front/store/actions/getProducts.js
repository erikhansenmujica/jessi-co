import {ADD_PRODUCTS} from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

const addProducts = (products)=>({
    type:ADD_PRODUCTS,
    products
})

export const fetchProductsByName =(name)=> 
Axios.get(`/api/products${name}`)
.then(products=>store.dispatch(addProducts(products)))

export const fetchProductsByCat =(cat)=> 
Axios.get(`/api/products${cat}`)
.then(products=>store.dispatch(addProducts(products)))