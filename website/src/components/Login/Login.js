import React from "react";
import logo from "../../assets/logo.png";
import { useLocalContext } from "../../context/context";
import { Button } from "@material-ui/core";
import './style.css';
const Login = () => {
    const {login,loggedInUser} = useLocalContext();
    return (
    <div className="login">
      <img className="login__logo" src={logo} alt="Classroom" />
      <Button variant="contained" color="default" onClick={()=> login()}>
        Ingresar Ahora!
      </Button>
    </div>
  );
};

export default Login;