import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Top from './Top';


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



const Login = (props: any) => {
  const classes = useStyles();

  const [userName, setUserName] = useState("");
  const user = props.user;
  const setUserStatus = props.setUserStatus;
  const login = props.login;
  const setLogin = props.setLogin;
  

  //ユーザーステートの更新
  useEffect(() => {
  });
  
  //新規ユーザー登録
  const createUser = (e: any) => {
    if(userName === ""){
      window.alert("名前が入力されていません");
      return;
    }
    const userdata = localStorage.getItem(userName);
    if(userdata){
      window.alert("既にユーザー名が登録されています");
      return;

    } else if(userName === "cheater"){
      const newUser = {
        name: userName,
        age:20, 
        days:0, 
        money:10000000000000, 
        hamburger:0, 
        etfStocks:0, 
        etfBonds:0, 
        lemonadeStand:0,
        iceCreamTruck:0, 
        house:0, 
        townhouse:0, 
        mansion:0, 
        industrialSpace:0, 
        hotelSkyscraper:0, 
        skyRailway:0,};
      setUserStatus(newUser);
    
    } else {
      const newUser = {
        name: userName,
        age:20, 
        days:0, 
        money:50000, 
        hamburger:0, 
        etfStocks:0, 
        etfBonds:0, 
        lemonadeStand:0,
        iceCreamTruck:0, 
        house:0, 
        townhouse:0, 
        mansion:0, 
        industrialSpace:0, 
        hotelSkyscraper:0, 
        skyRailway:0,};
      setUserStatus(newUser);
    }

    setLogin(true);
  }

  //ユーザーをロード
  const loadUser = (e: any) => {
    if(e.currentTarget.value === ""){
      window.alert("名前が入力されていません");
      return;
    }
    const userdata = localStorage.getItem(e.currentTarget.value);
    if(userdata){
      const loadUser:any = JSON.parse(userdata);
      setUserStatus(loadUser);
      setLogin(true);
    }
    else{
      alert("ユーザー名が見つかりません");
    }
  };
  


  return (
    <>
    <Paper className={classes.paper} elevation={3}>
      <Typography className={classes.title} variant="h2">クリック帝国ゲーム</Typography>
      <Divider />
      <Box>
        <Typography variant="subtitle1">
          【遊び方】
        </Typography>
        <Typography variant="body1">
          資産を増やすシュミレーションゲームです。<br />
          まずはハンバーガーをクリックしてお金を貯めましょう！<br />
        </Typography>
      </Box>
      <Divider />
      <Container className={classes.container}>
        <Box component="div" m={1} p={1}>
          <Typography variant="h5">新規スタート</Typography> 
        <Box component="div" className={classes.textfieldbox}>
          <TextField 
            // className={`${classes.margin} ${classes.textfieldbox}`} 
            className={classes.margin}
            id="newName"
            label="名前"
            variant="outlined"
            onChange={(e:any) => setUserName(e.currentTarget.value)}
          />
          <Link to="/Top"　style={{textDecoration: "none"}}>
          <Button 
            className={classes.btn}
            variant="contained"
            size="large"
            value={userName}
            onClick={(e:any) => createUser(e)}>開始</Button>
          </Link>
        </Box>
        </Box>
        <Box component="div" m={1} p={1}>
          <Typography variant="h5">ログイン</Typography>
          <Box component="div" className={classes.textfieldbox}>
            <TextField 
              className={classes.margin}
              id="loginName"
              label="名前"
              variant="outlined"
              onChange={(e:any) => setUserName(e.currentTarget.value)}
            />
            <Link to="/Top"　style={{textDecoration: "none"}}>
              <Button 
              className={classes.btn}
              variant="contained"
              size="large"
              value={userName}
              onClick={(e:any) => loadUser(e)}>開始</Button>
            </Link>
          </Box>
        </Box>
      </Container>
      </Paper>
    </>
  )
}

export default Login
