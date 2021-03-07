import React from 'react'
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: "30vh",
    width: "50vh",
    overflow:'scroll',
  },
  paper: {
    height: "30vh",
    width: "50vh",
    overflow:'scroll',
    backgroundColor: "#e8e4e6",
    color: '#001e1d',
    padding: '20px',
    position: "relative",
    minHeight: '30vh',
  },

});
const GoodsList = (props: any, { match }:any) => {
  const classes = useStyles();

  const listItems = props.assetArray.map((goods: any, index: number) =>
  // <ul key={index}>
    <List key={index}>
      <Link to = {{pathname: `/Goods/${index}`, state:index}} style={{textDecoration: "none"}}>          
      <ListItemText>{goods.name}</ListItemText>
      </Link>
      <ListItemText>{goods.explanation}</ListItemText>
      <ListItemText>価格: {goods.price.toLocaleString()}円</ListItemText>
      <ListItemText>保有数量: {props.user[goods.id]}個</ListItemText>
      <Divider />
    </List>
    
  // </ul>
  );


  return (
      <Paper className={classes.paper} elevation={3}>
      <ul>
        {listItems}
      </ul>
      </Paper>
  )
}

export default GoodsList
