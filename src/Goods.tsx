import React from 'react'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  textfield: {
    backgroundColor: 'white'
  }
});

const Goods = (props: any) => {
  const classes = useStyles();

  const location:any = useLocation();
  const index = location.state;
  const goods = props.assetArray[index];
  props.setAssetIndex(index);
  return (
    <Box bgcolor="text.secondary" m={1} p={1} width={1/2}>
      <h3>{goods.name}</h3>
    <List>
      <ListItemText>Max Purchase: {goods.maxPurchase}</ListItemText>
      <ListItemText>Price: ${goods.price}</ListItemText>
      <ListItemText>{goods.explanation}</ListItemText>
    </List>
        <p>How Many would you like to purchase?</p>
        <TextField
          className={classes.textfield}
          id="input"
          label="Number"
          type="number"
          inputProps={{ min: 0}}
          InputLabelProps={{
            shrink: true,
          }} 
          variant="filled"
          value={props.input} 
          onChange={(e: any) => props.onChange(e)}
          />

        <p>Total:$ {Number.isNaN(props.input) ? 0 : props.input * goods.price}</p>
        <Button 
          value={props.input * goods.price} 
          name={goods.id} 
          variant="contained" 
          color="primary" 
          form="input" 
          onClick={(e:any ) => props.onPurchase(e)}>
            Purchase
          </Button>
        <Link to="">
        <Button variant="contained">Go back</Button>
        </Link>
    </Box>
  )
}

export default Goods
