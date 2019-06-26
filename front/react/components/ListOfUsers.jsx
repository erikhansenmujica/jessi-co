import React from "react"

export default (props) => (
    <ul className="list-group" style={{ marginLeft: "20%", marginRight: "20%" }}>
        {props.users && props.users.map(user =>
            <li key={user.id}className="list-group-item">
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <button type="button" className="btn btn-danger" style={{float:"right"}} onClick={()=>props.delete(user)}>Delete User</button>
                <div className="custom-control custom-switch" style={{float:"right"}}>
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={()=>props.update(user)}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Make admin or remove permissions</label>
                </div>
            </li>
        )}
    </ul>
)