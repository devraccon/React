import Axios from "axios";
import { useEffect } from "react";
import axios from "axios";

function LoginPage({history}){
    
    function joinHandler(){
        try{
            let data = {email: "kang3351@naver.com"};
            axios.post("/auth/login" ,JSON.stringify(data), {
                headers: {
                  "Content-Type": `application/json`,
                }})
            .then(res =>{
                console.log("res.data.accessToken : " + res.data);
                localStorage.setItem(res.data);
                history.push("/");
            })
            .catch(ex=>{
                console.log("login requset fail : " + ex);
            })
            .finally(()=>{console.log("login request end")});
        }catch(e){
            console.log(e);
        }
        
        
    }

    useEffect(()=>{
        console.log("LoginPage render ... ");
    })
    return(
        <div>
            <span>Login Page</span>
            <button type="button" onClick={joinHandler}>Join</button>
        </div>
    )
}

export default LoginPage;