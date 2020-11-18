import { useEffect } from "react";
import rootStore from "../store";

function LoginPage({history}){
   
    function joinHandler(){
        const {userData} = rootStore();
        userData.setAccessToken("aaaaaaaa");
        history.push("/counter");
    }

    useEffect(()=>{
        console.log("isLogin ");
    })
    return(
        <div>
            <span>Login Page</span>
            <button type="button" onClick={joinHandler}>Join</button>
        </div>
    )
}

export default LoginPage;