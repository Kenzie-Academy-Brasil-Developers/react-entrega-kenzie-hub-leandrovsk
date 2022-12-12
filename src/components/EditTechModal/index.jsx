import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import Button from "../Button";
import { StyledModal } from "./styles";
import { useForm } from "react-hook-form";

const EditTechModal = () => {
  const { editTechModal, setEditTechModal, techData, deleteTech, editTech, setSelectChange, selectChange } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    editTech(techData.id, data);
  };

  return (
    <StyledModal className={editTechModal}>
      <div className="ModalContainer">
        <span>
          <h3 className="ModalTitle">Tecnologia Detalhes</h3>
          <button className="CloseBtn" onClick={() => setEditTechModal("disabled")}>
            X
          </button>
        </span>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="">Nome do projeto</label>
          <input defaultValue={techData.title} disabled />
          {errors.name?.message}
          <label htmlFor="">Status</label>
          <select {...register("status")} onChange={() => setSelectChange(true)}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="BtnsContainer">
            <Button className={selectChange ? "EditTech" : "EditTechDisabled"} type="submit">
              Salvar alterações
            </Button>
            <Button className={"DeleteTech"} type="button" onClick={() => deleteTech(techData.id)}>
              Excluir
            </Button>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};

export default EditTechModal;
