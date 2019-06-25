import React from "react";


export default (props) => {
  return (
    <ul className="nav justify-content-center grey lighten-4 py-2">
{/* 
      <li className="nav-item">
        <a className="nav-link active" href="#!">Active</a>
      </li> */}
      {props.cats&&props.cats.map(cat =>
        <li className="nav-item" key={cat.id}>
          <a className="nav-link disabled" id={cat.id} >{cat.name}</a>
        </li>
      )}
    </ul>
  )
}