import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { StyledRegisterForm } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O email é obrigatório").email("Email inválido"),
    password: yup.string().required("A senha é obrigatória"),
    retypePassword: yup
      .string()
      .required("Repita sua senha")
      .oneOf([yup.ref("password")], "As senhas não coincidem "),
    bio: yup.string().required("A bio é obrigatória"),
    contact: yup.string().required("O contato é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const submit = (data) => {
    delete data.retypePassword;
    console.log(data);
    toast.success("Cadastro efetuado com sucesso");
    reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <h3>Crie sua conta</h3>
      <p>Rápido e grátis, vamos nessa</p>
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" placeholder="Digite aqui seu nome" {...register("name")} />
      {errors.name?.message}
      <label htmlFor="email">Email</label>
      <input id="email" type="text" placeholder="Digite aqui seu email" {...register("email")} />
      {errors.email?.message}
      <label htmlFor="password">Senha</label>
      <input id="password" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
      {errors.password?.message}
      <label htmlFor="retypePassword">Confirma Senha</label>
      <input id="retypePassword" type="password" placeholder="Digite novamente sua senha" {...register("retypePassword")} />
      {errors.retypePassword?.message}
      <label htmlFor="bio">Bio</label>
      <input id="bio" type="text" placeholder="Fale sobre você" {...register("bio")} />
      {errors.bio?.message}
      <label htmlFor="contact">Contato</label>
      <input id="contact" type="text" placeholder="Opção de contato" {...register("contact")} />
      {errors.contact?.message}
      <label htmlFor="select">Selecionar Módulo</label>
      <select className="courseModuleSelect" id="select" {...register("course_module")}>
        <option value="Primeiro Módulo">Primeiro Módulo</option>
        <option value="Segundo Módulo">Segundo Módulo</option>
        <option value="Terceiro Módulo">Terceiro Módulo</option>
        <option value="Quarto Módulo">Quarto Módulo</option>
        <option value="Quinto Módulo">Quinto Módulo</option>
        <option value="Sexto Módulo">Sexto Módulo</option>
      </select>
      <Button type="submit" className={`RegisterSubmit ${(!isDirty || !isValid) && "Disabled"}`}>
        Cadastrar
      </Button>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
