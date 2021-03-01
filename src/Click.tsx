import React from 'react'
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import hamburger from './food_hamburger.png';


const Click = (props:any) => {

  return (
    <Box bgcolor="text.secondary" m={1} p={1} width="50%">
      <img alt="hamburger" onClick={props.onClick} src={hamburger} />
    </Box>
  )
}

export default Click
