
import { useObserver } from 'mobx-react';
import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({isLogin , component : Component , render, ...rest }){

    
    useEffect(()=>{
      console.log("AuthRoute render isLogin : " + isLogin);
    })

    
    return useObserver(() => (
         <Route
          {...rest}
          render={(props) =>
            isLogin ? (
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