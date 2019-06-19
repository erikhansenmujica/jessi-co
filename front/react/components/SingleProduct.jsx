import React from "react";

const carouselStyle = {
  display: "block",
  width: "35%",
  height: "40%",
  margin: "auto",
  padding: "1%"
};
const iconStyle = {
  textAlign: "center"
};

export default props => {
  return (
    <div>
      {props.product.data && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={carouselStyle}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={props.product.data.images}
                className="d-block w-100 rounded"
                alt="..."
              />
            </div>
            {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div> */}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      )}
      {props.product.data && (
        <div>
          <h2 className="text-center">{props.product.data.name}</h2>
          <p className="text-center text-wrap">
            {props.product.data.description}
          </p>
          <div style={iconStyle}>
            <h4>${props.product.data.price}</h4>
            <span onClick={props.addToCart}>
              {console.log(props)}
              <i className="fas fa-cart-plus fa-3x" />
            </span>
            <span>
              <i class="fas fa-cart-arrow-down fa-3x" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
