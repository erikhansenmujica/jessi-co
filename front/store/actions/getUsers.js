import {ADD_USERS} from "../../utils/constants"
import Axios from "axios";

const addUsers = (users)=>({
    type:ADD_USERS,
    users
})

export const fetchUsers = () => 
(dispatch)=>
    Axios.get(`/api/users/all`)
        .then(users=>dispatch(addUsers(users.data)))


