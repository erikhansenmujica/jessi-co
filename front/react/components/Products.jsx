import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'space-around',
    paddingLeft: "7%"
  },
  gridList: {
    width: "100vw",
    height: "100vh",
  },
}));


export default (props)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList}  >

        {props.products && props.products.map(prod =>
            <div className="card" style={{
              width: "18rem",
              margin: "2% 2% 2% 2%"
            }} key={prod.id}>
              <img src={prod.images[0]} className="card-img-top" style={{
                height: "60%",
                objectFit: "contain"
              }} alt="no images" />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">Cantidad disponible: {prod.stock} precio: ${prod.price} </p>
                <Link to={`/products/${prod.name}`} className="btn btn-primary" onClick={() => {
                  props.handleClick(prod)
                }}>Check Product</Link>
              </div>
            </div>
        )}
      </GridList>
    </div>
  );
}