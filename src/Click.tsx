import React from 'react'

import Box from '@material-ui/core/Box';


const Click = (props:any) => {
  const hamburger = 'https://f.easyuploader.app/eu-prd/upload/20210307163305_4b744851.png';

  return (
    <Box m={1} p={1}>
      <img alt="hamburger" onClick={props.onClick} src={hamburger} width="200" height="150"/>
    </Box>
  )
}

export default Click
