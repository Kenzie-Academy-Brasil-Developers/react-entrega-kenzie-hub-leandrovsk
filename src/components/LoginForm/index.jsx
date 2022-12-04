import React, { useState } from "react";
import Button from "../Button";
import { StyledLoginForm } from "./styles";
import EyeIcon from "../../assets/img/eyeIcon.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required("Digite um email válido").email("Email inválido"),
    password: yup.string().required("Digite uma senha"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  const navigate = useNavigate();

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" placeholder="Digite seu email" {...register("email")} />
      {errors.email?.message}
      <label htmlFor="password">Senha</label>
      <span>
        <input id="password" type={!showPassword ? "password" : "text"} placeholder="Digite sua senha" {...register("password")} />
        <img className="EyeIcon" src={EyeIcon} onClick={() => setShowPassword(!showPassword)} alt="EyeIcon" />
      </span>
      {errors.password?.message}
      <Button type="submit" className="LoginSubmit">
        Entrar
      </Button>
      <p>Ainda não possui uma conta?</p>
      <Button type="button" className="LoginBackToRegister" onClick={() => navigate("/register")}>
        Cadastre-se
      </Button>
    </StyledLoginForm>
  );
};

export default LoginForm;
