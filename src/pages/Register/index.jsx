import React from "react";
import RegisterForm from "../../components/RegisterForm";
import RegisterHeader from "./RegisterHeader";
import { StyledRegisterMain } from "./styles";

const RegisterPage = () => {
  return (
    <StyledRegisterMain>
      <RegisterHeader />
      <RegisterForm />
    </StyledRegisterMain>
  );
};

export default RegisterPage;
