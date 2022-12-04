import React from "react";
import LoginForm from "../../components/LoginForm";
import Logo from "../../assets/img/logo.svg";
import { StyledLoginMain } from "./styles";

const LoginPage = () => {
  return (
    <StyledLoginMain className="loginPageContainer">
      <img className="Logo" src={Logo} alt="Logotipo" />
      <LoginForm />
    </StyledLoginMain>
  );
};

export default LoginPage;
