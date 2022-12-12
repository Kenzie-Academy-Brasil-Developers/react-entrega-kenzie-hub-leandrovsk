import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import Button from "../Button";
import * as yup from "yup";
import { StyledModal } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EditTechModal = () => {
  const { techModal, setTechModal, registerNewTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Digite um título"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const submit = (data) => {
    registerNewTech(data);
    reset();
  };

  return (
    <StyledModal className={techModal}>
      <div className="ModalContainer">
        <span>
          <h3 className="ModalTitle">Cadastrar tecnologia</h3>
          <button className="CloseBtn" onClick={() => setTechModal("disabled")}>
            X
          </button>
        </span>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="">Nome</label>
          <input type="text" {...register("title")} />
          {errors.name?.message}
          <label htmlFor="">Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button className={"RegisterSubmit"} type="submit">
            Cadastrar Tecnologia
          </Button>
        </form>
      </div>
    </StyledModal>
  );
};

export default EditTechModal;
