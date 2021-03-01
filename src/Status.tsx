import React from 'react'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';




const Status = (props: any) => {
  const user1 = props.user1;

  return (
    <Box bgcolor="text.secondary" m={1} p={1} width={1/2}>
      <Typography variant="body1">
        <List>
          <ListItemText>Name: {user1.name}</ListItemText>
          <ListItemText>Age: {user1.age} years old</ListItemText>
          <ListItemText>Days: {user1.days} days</ListItemText>
          <ListItemText>Money: ${user1.money}</ListItemText>
          <ListItemText></ListItemText>
        </List>
      </Typography>
    </Box>
  )
}

export default Status
