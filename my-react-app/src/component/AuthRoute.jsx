
import { useObserver } from 'mobx-react';
import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import rootStore from '../store/index';

function AuthRoute({component : Component , render, ...rest }){
    const {userData} = rootStore();

    const isLogin = userData.getAccessToken() == null ? false : true;

    useEffect(()=>{
      console.log("isLogin : " + isLogin);
    })

    
    return useObserver(() => (
         <Route
          {...rest}
          render={(props) =>
            userData.getAccessToken() ? (
              render ? (
                render(props)
              ) : (
                <Component {...props} />
              )
            ) : (
              <Redirect to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
            
          }
        />
      )
  );
}
export default AuthRoute;