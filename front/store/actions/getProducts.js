import {ADD_PRODUCT, ADD_PRODUCTS} from "../../utils/constants"
import Axios from "axios";
import store from "../../store/index"

const addProducts = (products)=>({
    type:ADD_PRODUCTS,
    products
})

export const addProduct = (product)=>({
    type:ADD_PRODUCT,
    product
})

export const fetchProducts = () => 
(dispatch)=>
    Axios.get(`/api/products/all`)
        .then(products=>dispatch(addProducts(products.data)))

export const fetchProductsByName = (name) => 
    Axios.get(`/api/products/${name}`)
        .then(products=>store.dispatch(addProducts(products)))

export const fetchProductsByCat = (cat) => 
    Axios.get(`/api/products/${cat}`)
        .then(products=>store.dispatch(addProducts(products)))

export const fetchProductsById = (id) => 
    Axios.get(`/api/products/${id}`)
        .then(product=>store.dispatch(addProduct(product)))
