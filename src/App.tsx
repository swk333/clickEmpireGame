import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './Top';
import Login from './Login';
import './App.css';

//ユーザー定義
class User {
  constructor(
    public name:string, 
    public age:number, 
    public days:number, 
    public money:number, 
    public hamburger:number, 
    public etfStock:number, 
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

  const [user, setUserStatus] = useState(new User("", 20, 0, 50000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
  const [userName, setUserName] = useState("");

  //新規ユーザー登録
  const createUser = (e: any) => {
    setUserName(e.currentTarget.value);
    const newUser = Object.assign(user, {name: userName});
  //ユーザー情報の保存
    const jsonUserData= JSON.stringify(newUser);
    console.log(jsonUserData);
    localStorage.setItem(newUser.name, jsonUserData);
  }

  //ユーザーをロード
  const loadUser = (e: any) => {
    setUserName(e.currentTarget.value);
    const loadJsonString: any = localStorage.getItem(userName);
    console.log(loadJsonString);
    const joinedUser:any = JSON.parse(loadJsonString);
  }

  const startUser = () => {
    
  }
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login 
            // user={user} 
            // setUserStatus={setUserStatus}
            userName={userName} 
            setUserName={setUserName}
            createUser={(e:any) => createUser(e)}
            loadUser={(e:any) => loadUser(e)} />
          </Route>
          <Route exact path="/Top">
            <Top user={user} setUserStatus={setUserStatus} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
