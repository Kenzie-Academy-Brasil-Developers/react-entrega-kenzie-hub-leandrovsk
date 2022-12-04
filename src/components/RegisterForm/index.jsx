import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { StyledRegisterForm } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

const RegisterForm = () => {
  const [onLoading, setOnloading] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório").email("Email inválido"),
    password: yup.string().required("A senha é obrigatória").min(6, "A senha deve ter no mínimo 6 caracteres"),
    retypePassword: yup
      .string()
      .required("Repita sua senha")
      .oneOf([yup.ref("password")], "As senhas não coincidem "),
    bio: yup.string().required("A bio é obrigatória"),
    contact: yup.string().required("O contato é obrigatório"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const userRegister = async (data) => {
    try {
      setOnloading(true);
      await api.post("users", data);
      toast.success("Cadastro efetuado com sucesso \n Redirecionando para o login");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message === "Email already exists" ? "Erro: o email já existe" : "Ops, algo deu errado");
    } finally {
      setOnloading(false);
    }
  };

  const submit = (data) => {
    delete data.retypePassword;
    console.log(data);
    userRegister(data);
    reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <h3>Crie sua conta</h3>
      <p>Rápido e grátis, vamos nessa</p>
      <label htmlFor="name">Nome</label>
      <Input id="name" type="text" placeholder="Digite aqui seu nome" register={register} />
      {errors.name?.message}
      <label htmlFor="email">Email</label>
      <Input id="email" type="text" placeholder="Digite aqui seu email" register={register} />
      {errors.email?.message}
      <label htmlFor="password">Senha</label>
      <Input id="password" type="password" placeholder="Digite aqui sua senha" register={register} />
      {errors.password?.message}
      <label htmlFor="retypePassword">Confirma Senha</label>
      <Input id="retypePassword" type="password" placeholder="Digite novamente sua senha" register={register} />
      {errors.retypePassword?.message}
      <label htmlFor="bio">Bio</label>
      <Input id="bio" type="text" placeholder="Fale sobre você" register={register} />
      {errors.bio?.message}
      <label htmlFor="contact">Contato</label>
      <Input id="contact" type="text" placeholder="Opção de contato" register={register} />
      {errors.contact?.message}
      <label htmlFor="course_module">Selecionar Módulo</label>
      <select className="courseModuleSelect" id="course_module" {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend">Primeiro módulo (Introdução ao Frontend)</option>
        <option value="Segundo módulo (Frontend intermediário)">Segundo módulo (Frontend intermediário)</option>
        <option value="Terceiro módulo (Frontend Avançado)">Terceiro módulo (Frontend Avançado)</option>
        <option value="Quarto módulo (Introdução ao Backend)">Quarto módulo (Introdução ao Backend)</option>
        <option value="Quinto módulo (Backend Avançado)">Quinto módulo (Backend Avançado)</option>
      </select>
      <Button type="submit" className={`RegisterSubmit ${(!isDirty || !isValid) && "Disabled"}`}>
        {onLoading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
