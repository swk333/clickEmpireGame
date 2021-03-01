import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Goods from './Goods';
import GoodsList from './GoodsList';
import Status from './Status';
import Click from './Click';
import ClickState from './ClickState';


//資産定義
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

//ユーザー定義
class User {
  name: string;
  age: number;
  days: number;
  money: number;
  hamburger? : number;
  etfStock? : number;
  etfBonds? : number;
  lemonadeStand? : number;
  iceCreamTruck?: number;
  house? : number;
  townhouse? : number;
  mansion? : number;
  industrialSpace? : number;
  hotelSkyscraper? : number;
  skyRailway? : number;

  constructor(name:string, age:number, days:number, money:number, hamburger?:number, etfStock?:number, etfBonds?:number, lemonadeStand?:number, iceCreamTruck?:number, house?:number, townhouse?:number, mansion?:number, industrialSpace?:number, hotelSkyscraper?:number, skyRailway?:number){
    this.name = name;
    this.age = age;
    this.days = days;
    this.money = money;
    this.hamburger = hamburger;
    this.etfStock = etfStock;
    this.etfBonds = etfBonds;
    this.lemonadeStand = lemonadeStand;
    this.iceCreamTruck = iceCreamTruck;
    this.house = house;
    this.townhouse = townhouse;
    this.mansion = mansion;
    this.industrialSpace = industrialSpace;
    this.hotelSkyscraper = hotelSkyscraper;
    this.skyRailway = skyRailway;
  }
}






//秒数カウントのためのカスタムフック
function useInterval(callback:any, delay:any) {
  const savedCallback:any = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if(delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


const Top : React.FC = () => {
  const Flipmachine = new Investment("Flipmacine", 500, "グリルをクリックごとに 25 円を取得します。", 15000);
  const EtfStock = new Investment("株式ETF", Infinity, "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します。", 300000);
  const goodsArr = [Flipmachine, EtfStock];
  const User1 = new User("tokage", 31, 0, 5000);
  

  //経過日数に応じてユーザーの年齢をカウント
  const [seconds, setSeconds] = useState(0);
  const [age, setAge] = useState(User1.age);
  useInterval(() => {
    setSeconds(seconds + 1);
    if(seconds === 0){
      setAge(age);
    }
    else if(seconds % 10 === 0){
      setAge(age + 1);
    }
  }, 1000);
  User1.days += seconds;
  User1.age = age;
  
  // ハンバーガークリック処理
  const [money, setMoney] = useState(User1.money);
  const handleClick = () => {
    setMoney(money + 25);
  };
  User1.money = money;

  //保有資産の増減管理
  User1.hamburger = 1;
  const [inputValue, setInputValue] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  const handleInputNum = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInputNum(e.currentTarget.valueAsNumber);
  }
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    let value:number = inputNum * Flipmachine.price;
    setInputValue(value);
    e.preventDefault();
  };
  User1.money -= inputValue; 

  return (
    <Container>
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
            <Route exact path="/"><GoodsList goods={goodsArr} /></Route>
            <Route path="/Goods">
              <Goods 
              onChange={(e:any) => handleInputNum(e)} 
              onPurchase={(e:any) => submit(e)} 
              inputNum={inputNum} 
              inputValue={inputValue} 
              goods1={Flipmachine} />
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}

export default Top;
