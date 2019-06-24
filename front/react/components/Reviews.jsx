import React from "react";

export default (props)  => {
    return (
        <div>
            {/* {console.log("ESTAS SON LAS PROPIEDADES", props)} */}
            {props.reviews && props.reviews.length > 0 ?
             props.reviews.map(review =>
                <h1>{review}</h1> 
            
            )
        : <h1> No hay reviews disponibles. Sé el primero en comprar y comentar!</h1>
        }
        </div>
    )
}