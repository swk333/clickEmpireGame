import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';


const Login = (props: any) => {
  return (
    <div>
      <h3>新規スタート</h3>
      <TextField 
        id="newName"
        // value={props.userName}
        label="名前"
        variant="outlined"
        onChange={(e:any) => props.setUserName(e.currentTarget.value)}
      />
      <Link to="/Top">
      <Button 
        variant="contained"
        value={props.userName}
        onClick={(e:any) => props.createUser(e)}>START</Button>
      </Link>
      <h3>ログイン</h3>
      <TextField 
        id="loginName"
        // value={props.userName}
        label="名前"
        variant="outlined"
        onChange={(e:any) => props.setUserName(e.currentTarget.value)}
      />
      <Link to="/Top">
        <Button 
        variant="contained"
        value={props.userName}
        onClick={(e:any) => props.loadUser(e)}>START</Button>
      </Link>
    </div>
  )
}

export default Login
