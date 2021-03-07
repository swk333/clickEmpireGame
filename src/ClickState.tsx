import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const ClickState = (props: any) => {
  const user = props.user;
  const clickCount = props.clickCount;
  let moneyperclick = (user.hamburger === 0 ? 25 : user.hamburger * 25 + 25);
  return (
    <Box m={1} p={1}>
        <Typography variant="body1">クリック回数：{clickCount}回</Typography>
        <Typography variant="body1">１クリックあたり：{moneyperclick}円</Typography>
    </Box>
  )
}

export default ClickState
