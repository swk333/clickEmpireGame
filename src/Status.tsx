import React from 'react'
//import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';




const Status = (props: any) => {
  const user = props.user;

  return (
    <Box m={1} p={1} width={1}>
      <List>
        <ListItemText>名前: {user.name}</ListItemText>
        <ListItemText>年齢: {user.age} 歳</ListItemText>
        <ListItemText>経過日数: {user.days} 日</ListItemText>
        <ListItemText>保有現金: {user.money.toLocaleString()} 円</ListItemText>

      </List>
    </Box>
  )
}

export default Status
