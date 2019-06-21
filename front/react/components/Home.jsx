import React from "react";

const style = {
  // div: {
  //  cs:sdlcm
  // },
  text: {
    textAlign: "center",
    fontFamily: "Francois One",
    fontSize: "80px"
  },
  text2: {
    textAlign: "center"
  },
  footer: {
    backgroundColor: "#2A2A36"
  }
};
export default ({ products }) => {
  return (
    <div className="container">
      <h1 style={style.text}>TESSIE&CO</h1>

      {products.products && (
        products.products.map(product => (
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={product.images} alt="... " />
              </div>
              {/* <div className="carousel-item">
                <img src={product.images} alt="..." />
              </div>
              <div className="carousel-item">
                <img src={product.images} alt="..." />
              </div> */}
            </div>
            {/* <a
              className="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a> */}
          </div>
        ))
      ) }
      <footer>
        <p className="float-right" style={style.text2}>
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2017-2019 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
          &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};
