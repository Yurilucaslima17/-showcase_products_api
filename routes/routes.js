import React, { useContext } from "react";
import {Switch, Route} from "react-router-dom";

import { Context } from "../services/authContext";

import Login from "../pages/login";
import Users from "../pages/users";

function CustomRoute({isPrivate, ...restProps}) {
  const {loading, authenticated} = useContext(Context);

  if(loading){
    return <h2>Loading...</h2>;
  }
  
  if(isPrivate && !authenticated){
    return <Redirect to="/login" />
  }

  return <Route {...restProps} />;
}

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route isPrivate exact path="/login" component={Users} />
    </Switch>
  );
}

export default Routes;
