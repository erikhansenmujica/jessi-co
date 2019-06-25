import React from "react";

export default props => {
let ratingSum= props.rating.reduce(function(acumulador, siguienteValor) {
  return acumulador + siguienteValor}, 0)


  return (
    <div>
      <form onSubmit={props.handleSubmitChange}>
        <input
          onChange={e => props.handleReviewChange(e)}
          placeholder="Escriba su review"
        />
        <select onChange={e => props.handleRatingChange(e)}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button>Submit Review</button>
      </form>
      {console.log(ratingSum)}
      {props.rating && props.rating.length > 0 ? (
        <h1>RATING : {Math.round(ratingSum/props.rating.length)}</h1>
      ) : null}
      {props.reviews && props.reviews.length > 0 ? (
        props.reviews.map(review => <h1 key={review.id}>{review}</h1>)
      ) : (
        <h1>
          {" "}
          No hay reviews disponibles. Sé el primero en comprar y comentar!
        </h1>
      )}
    </div>
  );
};
