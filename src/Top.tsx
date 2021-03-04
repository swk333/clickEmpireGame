import React, {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


import Goods from './Goods';
import GoodsList from './GoodsList';
import Status from './Status';
import Click from './Click';
import ClickState from './ClickState';


//資産定義
class Investment {
  id: string;
  name:string; 
  maxPurchase:number; 
  explanation:string; 
  price:number;

  constructor(id:string, name:string, maxPurchase:number, explanation:string, price:number){
    this.id = id;
    this.name = name;
    this.maxPurchase = maxPurchase;
    this.explanation = explanation;
    this.price = price;
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


const Top = (props: any) => {
  const assetArray = [
    new Investment("hamburger", "ハンバーガー用マシン", 500, "グリルをクリックごとに 25 円を取得します。", 15000),
    new Investment("etfStock", "株式ETF", Infinity, "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します。", 300000)
  ];
  
  const user = props.user;
  const setUserStatus = props.setUserStatus;
  
  //ユーザー情報の保存
  const saveUserData = () => {
    const jsonString = user;
    const jsonDecoded = JSON.stringify(jsonString);
    localStorage.setItem(user.name, jsonDecoded);
  };



  //経過日数に応じてユーザーの年齢をカウント
  useInterval(() => {
    if(user.days % 9 === 0 && user.days !== 0){
      setUserStatus({...user, days: user.days + 1, age: user.age + 1});
    }
    else {
      setUserStatus({...user, days: user.days + 1});
    }
  }, 1000);
  
  // ハンバーガークリック処理
  const handleClick = () => {
    setUserStatus({...user, money: user.money + 25});
  }
  

  //保有資産の増減管理
  const isNumber = (number: any) => {
    return(Number.isNaN(number) ? 0 : number);
  }

  const [input, setInput] = useState(0);
  const [assetIndex, setAssetIndex] = useState(0);
  const handleInputNum = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setInput(e.currentTarget.valueAsNumber);
  }
  
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const inputAsset = e.currentTarget.name;
    const inputValue = isNumber(input) * assetArray[assetIndex].price;
    console.log(user);
    setUserStatus({...user, money: user.money - inputValue, [inputAsset]: user[inputAsset] + input});
    
    e.preventDefault();
  };


  return (
    <Container>
      <Box bgcolor="text.secondary" width="100%">
      <Grid container direction="row" alignItems="center">
        <Grid item xs>
          <ClickState />
          <Click onClick={() => handleClick()} />
        </Grid>
        <Grid item xs>
          <Status user={user}/>
          <Router>
            <Switch>
            <Route exact path="/Top">
              <GoodsList  user={user}　assetArray={assetArray} />
            </Route>
            <Route path="/Goods/:pageId" component = { Goods }>
              <Goods 
                onChange={(e:any) => handleInputNum(e)} 
                onPurchase={(e:any) => submit(e)} 
                input={input} 
                assetArray={assetArray}
                setAssetIndex={setAssetIndex}
                 />
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
      <Button  variant="contained" onClick={() => saveUserData()}>保存</Button>
      <Link to="">
      <Button  variant="contained">戻る</Button>
      </Link>
      </Box>
    </Container>
  );
}

export default Top;
