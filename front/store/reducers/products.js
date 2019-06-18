import {ADD_PRODUCTS} from '../../utils/constants'

const initialState ={
    products:[]
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PRODUCTS:{
            return Object.assign({}, state, {products:action.products})
        }
        default:
            return state;
    }
}


