import React from 'react'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';


const useStyles = makeStyles({
  paper: {
    backgroundColor: "#e8e4e6",
    color: '#001e1d',
    padding: '30px 30px',
    position: "relative",
    minHeight: '30vh',
    height: '80%',
    top: "10vh",
  },

  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
  },

  margin: {
    margin: "10px",
  },
  
  textfieldbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    backgroundColor: "#f9bc60",
    margin: "10px",
    color: "#001e1d",
  },

});

const ButtonTop = (props: any) => {
  const classes = useStyles();

  const user = props.user;

  const reloadPage = () => {
    props.setLogin(false);
  }

  //ユーザー情報の保存関数
  const saveUserData = () => {
    const jsonString = user;
    const jsonDecoded = JSON.stringify(jsonString);
    localStorage.setItem(user.name, jsonDecoded);
  };
  

  return (
    <>
      <Box>
        <Button className={classes.btn} onClick={() => saveUserData()}>保存</Button>
        <Link to="/"　style={{textDecoration: "none"}}>
        <Button className={classes.btn} onClick={reloadPage}>ログインページ</Button>
        </Link>
      </Box>

    </>
  )
}

export default ButtonTop
