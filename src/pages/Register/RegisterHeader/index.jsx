import React from "react";
import { StyledRegisterHeader } from "./styles";
import Logo from "../../../assets/img/logo.svg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const RegisterHeader = () => {
  return (
    <StyledRegisterHeader>
      <img src={Logo} alt="Logotipo" />
      <Link to={"/login"}>
        <Button className="BackToLogin" type="button">
          Voltar
        </Button>
      </Link>
    </StyledRegisterHeader>
  );
};

export default RegisterHeader;
