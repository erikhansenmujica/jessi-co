import {LOG_USER} from '../../utils/constants'

const initialState ={
    user:{}
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case LOG_USER:{
            return Object.assign({}, state, {user:action.user})
        }
       
        default:
            return state;
    }
}