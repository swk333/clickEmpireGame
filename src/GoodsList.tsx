import React from 'react'
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

const GoodsList = (props: any, { match }:any) => {

  const listItems = props.assetArray.map((goods: any, index: number) =>
  <ul key={index}>
    <List>
      <Link to = {{pathname: `/Goods/${index}`, state:index}}>          
      <ListItemText>{goods.name}</ListItemText>
      </Link>
      <ListItemText>価格: {goods.price.toLocaleString()}円</ListItemText>
      <ListItemText>保有数量: {props.user[goods.id]}個</ListItemText>
    </List>

  </ul>
  );


  return (
    <Box bgcolor="text.secondary" m={1} p={1} width="50%">
        {listItems}
    </Box>
  )
}

export default GoodsList
