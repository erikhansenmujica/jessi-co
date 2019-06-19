import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100vw",
    height: "100vh",
  },

}));

 
export default function TitlebarGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} >
        
        {props.products&&props.products.map(prod=>
            <div className="card" style={{
                                          width: "18rem",
                                          margin: "2% 2% 2% 2%"
                                            }}>
            <img src={prod.images}className="card-img-top" alt="no images"/>
            <div className="card-body">
              <h5 className="card-title">{prod.name}</h5>
              <p className="card-text">Cantidad disponible: {prod.stock} precio: ${prod.price} </p>
              <Link to={`/products/${prod.name}`} className="btn btn-primary" onClick={()=>{
                props.handleClick(prod)
                }}>Check Product</Link>
            </div>
          </div>
        )}
      </GridList>
    </div>
  );
}