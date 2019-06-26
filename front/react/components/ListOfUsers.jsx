import React from "react"

export default (props)=>(
    <ul className="list-group" style={{marginLeft:"20%", marginRight:"20%"}}>
{props.users&&props.users.map(user=>
    <li className="list-group-item">
    <p>Name: {user.name}</p> 
    <p>Email: {user.email}</p>
    </li>
)}
    </ul>
)