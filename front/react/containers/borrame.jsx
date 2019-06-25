import React from "react";

export default props => {



  return (
    <div>
        <form onSubmit={props.handleSubmitChange}>
            <div className="form-group">
                <label for="exampleInputEmail1">Escribi tu review!</label>
                <input onChange={e => props.handleReviewChange(e)} placeholder="Que te parecio el producto?" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
             <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
        
    </div>
  );
};
