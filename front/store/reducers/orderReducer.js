import {ADD_ORDERS} from '../../utils/constants'

const initialState ={
    orders: []
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_ORDERS: {
            return Object.assign({}, state, {
                orders : action.orders
            })
        }
       
        default:
            return state;
    }
}


