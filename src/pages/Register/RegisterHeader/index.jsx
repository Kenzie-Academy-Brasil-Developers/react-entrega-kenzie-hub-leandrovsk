import React from "react";
import { StyledRegisterHeader } from "./styles";
import Logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const RegisterHeader = () => {
  return (
    <StyledRegisterHeader>
      <img src={Logo} alt="Logotipo" />
      <Link className="BackToLogin" to={"/login"}>
        Voltar
      </Link>
    </StyledRegisterHeader>
  );
};

export default RegisterHeader;
