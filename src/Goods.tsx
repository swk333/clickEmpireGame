import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { Link, useLocation } from 'react-router-dom';
import { Typography, Divider, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles({
  textfield: {
    backgroundColor: 'white'
  },
  paper: {
    backgroundColor: '#e8e4e6',
    padding: "20px",
    height: "30vh",
    width: "50vh",
    overflow:'scroll',
    color: '#001e1d',
    position: "relative",
    minHeight: '30vh',
  },

  btn: {
    backgroundColor: "#f9bc60",
    margin: "10px",
    color: "#001e1d",
  },
});

const Goods = (props: any) => {
  const classes = useStyles();

  const location:any = useLocation();
  const index = location.state;
  const goods = props.assetArray[index];
  useEffect(() => {
    props.setAssetIndex(index)
  });

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">{goods.name}</Typography>
    <List>
      <ListItemText>最大購入数: {goods.maxPurchase}</ListItemText>
      <ListItemText>価格: {goods.price.toLocaleString()}円</ListItemText>
      <ListItemText>{goods.explanation}</ListItemText>
    </List>
    <Divider />
      <Typography variant="body1">いくつ購入しますか？</Typography>
      <TextField
        className={classes.textfield}
        id="input"
        label="購入個数"
        type="number"
        inputProps={{ min: 0}}
        InputLabelProps={{
          shrink: true,
        }} 
        variant="filled"
        value={props.input} 
        onChange={(e: any) => props.onChange(e)}
        />
      <Typography variant="body1">総額: {Number.isNaN(props.input) ? 0 : (props.input * goods.price).toLocaleString()}円</Typography>
      <Button 
        className={classes.btn}
        style={{textDecoration: "none"}}
        value={props.input * goods.price} 
        name={goods.id} 
        variant="contained" 
        color="primary" 
        form="input" 
        onClick={(e:any ) => props.onPurchase(e)}>
          購入
        </Button>
        <Link to="/Top"　style={{textDecoration: "none"}}>
        <Button className={classes.btn} variant="contained">戻る</Button>
        </Link>
    </Paper>
  )
}

export default Goods
