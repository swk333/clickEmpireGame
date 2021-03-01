import React from 'react'
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';




const GoodsList = (props: any) => {
  const listItems = props.goods.map((goods: any, index: number) =>
    <List key={index}>
      <Link to="/Goods">          
      <ListItemText>{goods.name}</ListItemText>
      </Link>
      <ListItemText>Price: ${goods.price}</ListItemText>
    </List>
  );

  return (
    <Box bgcolor="text.secondary" m={1} p={1} width="50%">
        <ul>{listItems}</ul>
    </Box>
  )
}

export default GoodsList
