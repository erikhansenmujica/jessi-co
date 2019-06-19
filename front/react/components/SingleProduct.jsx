import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width:"80%",
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  images:{
    height:"vh"
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div className="container" style={{marginTop:"3%"}}>
      {props.product.name && (
        <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {props.product.images.map(image => (
            <GridListTile key={image}>
              <img src={image} alt={image} />
              
            </GridListTile>
          ))}
        </GridList>
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
            <IconButton size="large" color="primary" className={classes.button} aria-label="Add to shopping cart" onClick={props.addToCart}>
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton size="large" className={classes.button} aria-label="Delete" >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};
