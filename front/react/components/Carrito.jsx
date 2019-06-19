import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  
  const totprice = function(props){
    let partprice = 0;
  for (i = 0 ; i < props.carrito.length ; i++){
    partprice += props.carrito[i].price
  }      
  return partprice
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>WELCOME TO CARRITO</Paper>
        </Grid>
        {props.carrito &&
          props.carrito.Map(product => (
            <div>
              <Grid item xs={4}>
                <Paper img src={product.images}>
                  {" "}
                  className={classes.paper}>PRODUCT IMAGE
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <span>
                  <Paper className={classes.paper}> {product.name} </Paper>
                  <Paper className={classes.paper}> {product.price} </Paper>
                </span>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <AddIcon className={classes.rightIcon} />
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  <RemoveIcon className={classes.rightIcon} />
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  <DeleteIcon className={classes.rightIcon} />
                </Button>
              </Grid>
            </div>
          ))}
        <div>
          <ul>
            <li> PRECIO TOTAL : {totprice} </li>
          </ul>
        </div>
        <div>
          <form method="POST" action="/comprado">
            <input placeholder="Address" name="address" />            
            <button>PURCHASE</button>
          </form>
        </div>
      </Grid>
    </div>
  );
}
