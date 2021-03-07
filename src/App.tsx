import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Top from './Top';
import Login from './Login';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#004643",
    color: 'white',
    padding: '0 30px',
    position: "relative",
    minHeight: '100vh',
    height: '100%',
    textDecoration: "none",
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Reggae One',
      'Noto Sans JP',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

//ユーザー定義
class User {
  constructor(
    public name:string, 
    public age:number, 
    public days:number, 
    public money:number, 
    public hamburger:number, 
    public etfStocks:number, 
    public etfBonds:number, 
    public lemonadeStand:number, 
    public iceCreamTruck:number, 
    public house:number, 
    public townhouse:number, 
    public mansion:number, 
    public industrialSpace:number, 
    public hotelSkyscraper:number, 
    public skyRailway:number)

    {}  
}

const App = () => {
  const classes = useStyles();
  const [user, setUserStatus] = useState(new User("", 20, 0, 50000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
  const [login, setLogin] = useState(false);

  const loginCheck = () => {
  return (
    login 
    ? (<Top user={user} setUserStatus={setUserStatus} setLogin={setLogin} login={login}/>)
    : (<Login login={login} setLogin={setLogin} user={user} setUserStatus={setUserStatus} />)
    );
  };



  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
    
      <Router>
        <Switch>
          <Route exact path = "/">
            <Login login={login} setLogin={setLogin} user={user} setUserStatus={setUserStatus} />
          </Route>
          <Route path = "/Top">
            {loginCheck()}
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
