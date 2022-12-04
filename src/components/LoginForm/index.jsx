import React, { useState } from "react";
import Button from "../Button";
import { StyledLoginForm } from "./styles";
import EyeIcon from "../../assets/img/eyeIcon.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import Input from "../Input";

const LoginForm = ({ setUserData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

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

  const userLogin = async (data) => {
    try {
      setOnLoading(true);
      const response = await api.post("sessions", data);
      window.localStorage.clear();
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUserData(response.data.user);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message === "Incorrect email / password combination" ? "Erro: usuário ou senha incorretos" : "Ops, algo deu errado");
    } finally {
      setOnLoading(false);
    }
  };

  const submit = (data) => {
    userLogin(data);
    reset();
  };

  const navigate = useNavigate();

  return (
    <StyledLoginForm onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <Input id="email" type="text" placeholder="Digite seu email" register={register} />
      {errors.email?.message}
      <label htmlFor="password">Senha</label>
      <span>
        <Input id="password" type={!showPassword ? "password" : "text"} placeholder="Digite sua senha" register={register} />
        <img className="EyeIcon" src={EyeIcon} onClick={() => setShowPassword(!showPassword)} alt="EyeIcon" />
      </span>
      {errors.password?.message}
      <Button type="submit" className="LoginSubmit">
        {onLoading ? "Entrando..." : "Entrar"}
      </Button>
      <p>Ainda não possui uma conta?</p>
      <Link to={"/register"}>
        <Button type="button" className="LoginBackToRegister">
          Cadastre-se
        </Button>
      </Link>
    </StyledLoginForm>
  );
};

export default LoginForm;
