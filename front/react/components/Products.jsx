import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



 
export default function TitlebarGridList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Products</ListSubheader>
        </GridListTile>
<<<<<<< HEAD
        {props.products.name&&props.products.map(prod=>
            <GridListTile onClick={()=>props.handleClick(prod.id)}key={prod.id}>
          <img src={prod.images} alt={"not found"} />
=======
        {props.products&&props.products.map((elem)=>
          <GridListTile key={elem.id}>
            <img src={"!"} alt={"1"} />
>>>>>>> f60c42ccd844e2a3b516bc8f768dda8cc55849fe
            <GridListTileBar
              title={prod.name}
              subtitle={<span>stock: {prod.stock}</span>}
              actionIcon={
                <Link to={`/products/${prod.name}`}><IconButton aria-label={`info about${prod.name}`} className={classes.icon}>
                 
                </IconButton></Link> 
              }
            />
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}