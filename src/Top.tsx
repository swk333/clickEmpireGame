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
  increasepersec:number;

  constructor(id:string, name:string, maxPurchase:number, explanation:string, price:number, increasepersec:number){
    this.id = id;
    this.name = name;
    this.maxPurchase = maxPurchase;
    this.explanation = explanation;
    this.price = price;
    this.increasepersec = increasepersec;
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
  
  //資産の定義
  const [assetArray, setAssetArray] = useState([
    new Investment("hamburger", "ハンバーガー用マシン", 500, "グリルをクリックごとに 25 円を取得します。", 15000, 0),
    new Investment("etfStocks", "株式ETF", Infinity, "ETF 銘柄の購入分をまとめて加算し、毎秒 0.1% を取得します。", 300000, 0),
    new Investment("etfBonds", "債券ETF", Infinity, "ETF 銘柄の購入分をまとめて加算し、毎秒 0.07% を取得します。", 300000, 0),
    new Investment("lemonadeStand", "レモネードスタンド", 1000, "毎秒 30 円を取得します。	", 30000,30),
    new Investment("iceCreamTruck", "アイスクリームトラック", 500, "毎秒 120 円を取得します。", 100000, 120),
    new Investment("house", "田舎の家", 100, "毎秒 32,000 円を取得します。", 20000000, 32000),
    new Investment("townhouse", "都会の家", 100, "毎秒 64,000 円を取得します。", 40000000, 64000),
    new Investment("mansion", "マンション", 20, "毎秒 500,000 円を取得します。", 250000000, 500000),
    new Investment("industrialSpace", "産業スペース", 10, "毎秒 2,200,000 円を取得します。", 1000000000, 2200000),
    new Investment("hotelSkyscraper", "高層ホテル", 5, "毎秒 25,000,000 円を取得します。", 10000000000, 25000000),
    new Investment("skyRailway", "新幹線", 1, "毎秒 30,000,000,000 円を取得します。", 10000000000000, 30000000000)
  ]);

  //ユーザー情報設定
  let user = props.user;
  const setUserStatus = props.setUserStatus;
  
  
  //経過日数に応じてユーザーの年齢をカウント
  useInterval(() => {
    calculateRealAssetIncrease();
    calculateFinancialAssetIncrease();
    if(user.days % 9 === 0 && user.days !== 0){
      setUserStatus({...user, days: user.days + 1, age: user.age + 1});
    }
    else {
      setUserStatus({...user, days: user.days + 1});
    }
  }, 1000);
  


  //ユーザー情報の保存関数
  const saveUserData = () => {
    const jsonString = user;
    const jsonDecoded = JSON.stringify(jsonString);
    localStorage.setItem(user.name, jsonDecoded);
  };

  // ハンバーガークリック処理関数
  //todo:マシン数に応じてクリック金額像化
  const handleClick = () => {
    setUserStatus({...user, money: user.money + 25});
  }
  

  //購入資産の入力処理
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
    setUserStatus({...user, money: user.money - inputValue, [inputAsset]: user[inputAsset] + input});
    setInput(0);
    e.preventDefault();
  };
  

  useEffect(() => {
    const stock = assetArray[1];
    let stockPrice = (1 + user.etfStocks * 0.1) * stock.price;
    let newStock = {...stock, price: stockPrice}
    let newAssetArray = assetArray.slice();
    newAssetArray.splice(1, 1, newStock);
    setAssetArray(newAssetArray);
    //assetArrayが第２引数に入ってないため警告=>入れるとPriceが更新されてしまうのでNG
    //よくわからないタイミングで増えてる？=>コンパイルするときに増えてる
  }, [user.etfStocks])


  //不動産に応じた資産計算関数
  const calculateRealAssetIncrease = () => {
    let assetEarnedPerSec = 0;
    for(let i = 0; i < assetArray.length; i++){
      let asset = assetArray[i];
      assetEarnedPerSec += user[asset.id] * asset.increasepersec;
    }
    // setUserStatus({...user, money: user.money + assetEarnedPerSec});
    let updateUser = Object.assign(user, {money: user.money + assetEarnedPerSec});
    user = updateUser;
  }

  //金融資産に応じた資産計算関数
  const calculateFinancialAssetIncrease = () => {
    const stocks = assetArray[1];
    const bonds = assetArray[2];
    let assetEarnedPerSec = user[stocks.id] * stocks.price * 0.001 + user[bonds.id] * bonds.price * 0.0007;
    // setUserStatus({...user, money: user.money + assetEarnedPerSec});
    let updateUser = Object.assign(user, {money: user.money + assetEarnedPerSec});
    user = updateUser;
  }


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
