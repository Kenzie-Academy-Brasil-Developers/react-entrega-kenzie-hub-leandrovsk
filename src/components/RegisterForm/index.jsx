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
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().required("O email é obrigatório").email("Email inválido."),
    password: yup
      .string()
      .required("A senha é obrigatória.")
      .matches(/.{8,}$/, "A senha precisa conter no mínimo 8 caracteres.")
      .matches(/(?=.*[^\w\d\s])/, "A senha precisa conter pelo menos um caracter especial.")
      .matches(/(?=.*?[0-9])/, "A senha precisa conter pelo menos um número.")
      .matches(/(?=.*?[A-Z])(?=.*?[a-z])/, "A senha precisa conter pelo menos uma letra maiúscula e uma minúscula."),
    retypePassword: yup
      .string()
      .required("Repita sua senha.")
      .oneOf([yup.ref("password")], "As senhas não coincidem."),
    bio: yup.string().required("A bio é obrigatória."),
    contact: yup.string().required("O contato é obrigatório."),
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
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Ops, algo deu errado");
    } finally {
      setOnloading(false);
    }
  };

  const submit = (data) => {
    delete data.retypePassword;
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
