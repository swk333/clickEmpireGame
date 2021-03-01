import React from 'react'
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
//import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Link } from 'react-router-dom';

const Goods = (props: any) => {

  // const [inputValue, setInputValue] = useState(0);
  // const [inputNum, setInputNum] = useState(0);
  const goods1 = props.goods1;

  // const handleInputNum = (e: React.ChangeEvent<HTMLInputElement>) =>{
  //   setInputNum(e.target.valueAsNumber);
  // }
  // const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   let value:number = inputNum * goods1.price;
  //   setInputValue(value);
  //   e.preventDefault();
  // };

  return (
    <Box bgcolor="text.secondary" m={1} p={1} width={1/2}>
      <h3>{goods1.name}</h3>
      <List>
        <ListItemText>Max Purchase: {goods1.maxPurchase}</ListItemText>
        <ListItemText>Price: ${goods1.price}</ListItemText>
        <ListItemText>{goods1.explanation}</ListItemText>
      </List>
      <form id="input">
        <p>How Many would you like to purchase?</p>
        <input type="number" value={props.inputNum} onChange={(e) => props.onChange(e)}></input>
      </form>
        <p>Total:${props.inputValue}</p>
        <Button variant="contained" color="primary" form="input" onClick={(e) => props.onPurchase(e)}>Purchase</Button>
        <Link to="">
        <Button variant="contained">Go back</Button>
        </Link>
    </Box>
  )
}

export default Goods
