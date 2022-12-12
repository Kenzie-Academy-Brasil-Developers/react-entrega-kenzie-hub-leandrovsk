import React, { useContext } from "react";
import Button from "../Button";
import { StyledLoginForm } from "./styles";
import EyeIcon from "../../assets/img/eyeIcon.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Input from "../Input";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const { showPassword, setShowPassword, btnLoading, userLogin } = useContext(UserContext);

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
    userLogin(data);
    reset();
  };

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
        {btnLoading ? "Entrando..." : "Entrar"}
      </Button>
      <p>Ainda não possui uma conta?</p>
      <Link className="LoginBackToRegister" to={"/register"}>
        Cadastre-se
      </Link>
    </StyledLoginForm>
  );
};

export default LoginForm;
