import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon } from 'semantic-ui-react'

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
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  icon: {
    height: "100vh"
  }

}));

export default props => {
  const classes = useStyles();
  var i = 0

  return (
    <div className="container" style={{ marginTop: "3%" }}>
      {props.product.name && (
        <div id="carouselExampleIndicators" className="carousel slide" style={{ height: "55vh" }} data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            {props.product.images.map(img =>
              <div className="carousel-item active">
                <li data-target="#carouselExampleIndicators" data-slide-to={`{i}`}></li>
                {i += 1}
              </div>
            )}

          </ol>
          <div className="carousel-inner">
            {props.product.images.map(img =>
              <div className="carousel-item active">
                <img src={img} className="d-block w-100" alt="..." style={{ height: "55vh" }} />
              </div>
            )}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      )}
      {props.product.name && (
        <div>
          <h2 className="text-center">{props.product.name}</h2>
          <p className="text-center text-wrap">
            {props.product.description}
          </p>
          <div style={iconStyle}>
            <h4>${props.product.price}</h4>
            <Button icon onClick={props.setCart}>
              <Icon name='add to cart' size='large' />
            </Button>
            <Button icon onClick={props.addToCart}>
              <Icon name='trash alternate' size='large' />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
