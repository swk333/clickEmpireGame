import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Goods from './Goods';
import GoodsList from './GoodsList';
import Status from './Status';
import Click from './Click';
import ClickState from './ClickState';

class Investment {
  name:string; 
  maxPurchase:number; 
  explanation:string; 
  price:number;

  constructor(name:string, maxPurchase:number, explanation:string, price:number){
    this.name = name;
    this.maxPurchase = maxPurchase;
    this.explanation = explanation;
    this.price = price;
  }
}

class User {
  name: string;
  age: number;
  days: number;
  money: number;

  constructor(name:string, age:number, days:number, money:number){
    this.name = name;
    this.age = age;
    this.days = days;
    this.money = money;
  }
}

function handleClick() {
  console.log("worked");
};

const App : React.FC = () => {
  const Flipmachine = new Investment("Flipmacine", 500, "グリルをクリックごとに 25 円を取得します。", 15000);
  const User1 = new User("tokage", 31, 0, 5000);


  return (
    <Container className="App">
      <Box bgcolor="text.secondary" width="100%">
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs>
          <ClickState />
          <Click onClick={() => handleClick()} />
        </Grid>
        <Grid item xs>
          <Status user1={User1}/>
          <Router>
            <Switch>
            <Route exact path="/"><GoodsList goods1={Flipmachine} /></Route>
            <Route path="/Goods"><Goods goods1={Flipmachine} /></Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}

export default App;
