import React from 'react'
import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';




const GoodsList = (props: any) => {
  const goods1 = props.goods1;

  const numbers = [goods1, goods1, goods1];
  const listItems = numbers.map((comp) =>
    <List>          
      <ListItemText><Link to="/Goods">Name: {comp.name}</Link></ListItemText>
      <ListItemText>Price: ${comp.price}</ListItemText>
    </List>
  );

  return (
    <Box bgcolor="text.secondary" m={1} p={1} width="50%">
      <Typography>
        {/* <List> */}
          <ul>{listItems}</ul>
          {/* <ListItemText><Link to="/Goods">Title</Link></ListItemText>
          <ListItemText>Price:</ListItemText>
          <ListItemText>aaa</ListItemText> */}
        {/* </List> */}
      </Typography>
    </Box>
  )
}

export default GoodsList
