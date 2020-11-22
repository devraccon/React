import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthRoute from './component/AuthRoute';
import Counnter from './component/Counter';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [isLogin , setIsLogin] = useState(false);

  useEffect(()=>{
      try{
        let data = {email: "devracoon@naver.com"};
        axios.post("/auth/refreshToken" ,JSON.stringify(data), {
            headers: {
              "Content-Type": `application/json`,
            }})
        .then(res =>{
            console.log("res.data.accessToken : " + res.data);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
            setIsLogin(true);
        })
        .catch(ex=>{
            console.log("app silent requset fail : " + ex);
        })
        .finally(()=>{console.log("login request end")});
    }catch(e){
        console.log(e);
    }
  },[]);

  function loginCallBack(login){
    setIsLogin(login);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AuthRoute exact isLogin={isLogin} path="/" component={HomePage} />
        <Route path="/login"  render={(props)=> <LoginPage {...props} loginCallBack={loginCallBack}/>} />
        <AuthRoute path="/counter" isLogin={isLogin} component={Counnter} />
      </BrowserRouter>
    </div>
  );
}

export default App;
