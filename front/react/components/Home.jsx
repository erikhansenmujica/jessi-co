import React from "react";

const style = {
  div: {
    display: "block",
    margin: "auto",
    height: "300px",
    width: "200px",
    objectFit:"contain"

  },
  text: {
    textAlign: "center",
    fontFamily: 'Francois One',
    fontSize: "80px"
  },
  text2: {
    textAlign: "center"
  },
  footer: {
    "backgroundColor": "#2A2A36"
  },
  
};
//<h1 style={style.text}>TESSIE&CO</h1>
export default () => {
  return (
    <div className="container">
    <br/>
    <br/>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598800cv12d.jpg"
              className="d-block w-100"
              alt="..."
              style={style.div}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>MacBook</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.apple.com/my/support/products/images/mac-hero_2x.png"
              style={style.div}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mac Apple</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/watch/apple-watch-og-hero-201809?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1536762554360"
              style={style.div}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Apple Watch</h5>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          {" "}
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div
        id="carouselExampleCaptions1"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions1"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleCaptions1" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions1" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://as01.epimg.net/betech/imagenes/2018/09/12/portada/1536784865_386895_1536799374_noticia_normal.jpg"
              className="d-block w-100"
              alt="..."
              style={style.div}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Iphone XR</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://lamanzanamordida.net/app/uploads/2019/05/Apple-Watch-Series-4.jpg"
              style={style.div}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Apple Watch</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://http2.mlstatic.com/case-apple-original-iphone-7-8-D_NQ_NP_747069-MPE27568012317_062018-F.jpg"
              style={style.div}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cases Apple</h5>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions1"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions1"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
      <br />
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
