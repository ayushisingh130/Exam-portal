import React, {useState} from 'react'
import "./App.css";
import Error from "./Components/Error/Error";
import Register from "./Components/Register/Register";
import { Route, Switch } from "react-router-dom";
import Test from "./Components/Test/Test";
import Instruction from "./Components/Instruction/Instruction";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import ProtectedRoutes from "./Components/ProtectedRoutes.js/ProtectedRoutes";

function App() {
  const[isAuth,setisAuth]=useState(true);
  const[isAdmin,setisAdmin]=useState(true);
  

  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoutes path="/instruction" component={Instruction} isAuth={isAuth}/>
        <ProtectedRoutes path="/test" component={Test} isAuth={isAuth}/>
        <Route path="/register" component={Register} />
        <ProtectedRoutes path="/admin" component={Admin} isAuth={isAdmin}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
