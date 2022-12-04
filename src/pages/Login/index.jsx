import React from "react";
import LoginForm from "../../components/LoginForm";
import Logo from "../../assets/img/logo.svg";
import { StyledLoginMain } from "./styles";

const LoginPage = ({setUserData}) => {
  return (
    <StyledLoginMain className="loginPageContainer">
      <img className="Logo" src={Logo} alt="Logotipo" />
      <LoginForm setUserData={setUserData}/>
    </StyledLoginMain>
  );
};

export default LoginPage;
