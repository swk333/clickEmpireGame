import React from 'react'
//import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';




const Status = (props: any) => {
  const user = props.user;

  return (
    <Box bgcolor="text.secondary" m={1} p={1} width={1/2}>
      <List>
        <ListItemText>Name: {user.name}</ListItemText>
        <ListItemText>Age: {user.age} years old</ListItemText>
        <ListItemText>Days: {user.days} days</ListItemText>
        <ListItemText>Money: ${user.money}</ListItemText>

      </List>
    </Box>
  )
}

export default Status
