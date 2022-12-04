import React from "react";
import { StyledRegisterHeader } from "./styles";
import Logo from "../../../assets/img/logo.svg";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const RegisterHeader = () => {
  const navigate = useNavigate();

  return (
    <StyledRegisterHeader>
      <img src={Logo} alt="Logotipo" />
      <Button className="BackToLogin" type="button" onClick={() => navigate("/login")}>
        Voltar
      </Button>
    </StyledRegisterHeader>
  );
};

export default RegisterHeader;
