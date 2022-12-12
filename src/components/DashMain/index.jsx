import React from "react";
import Button from "../Button";
import { StyledDashMain } from "./styles";
import PlusIcon from "../../assets/img/plus.svg";
import TechList from "./TechList";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

const DashMain = () => {
  const { setTechModal } = useContext(TechContext)

  return (
    <StyledDashMain>
      <span className="DashMainHeader">
        <h2>Tecnologias</h2>
        <Button className="NewTech" onClick={() => setTechModal('enabled')}>
          <img src={PlusIcon} alt="Nova Tecnologia" />
        </Button>
      </span>
      <TechList />
    </StyledDashMain>
  );
};

export default DashMain;
