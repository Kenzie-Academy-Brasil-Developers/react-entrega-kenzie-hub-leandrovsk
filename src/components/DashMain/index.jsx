import React from "react";
import Button from "../Button";
import { StyledDashMain } from "./styles";
import PlusIcon from "../../assets/img/plus.svg";
import TechList from "./TechList";

const DashMain = ({userData}) => {
  return (
    <StyledDashMain>
      <span className="DashMainHeader">
        <h2>Tecnologias</h2>
        <Button className="NewTech">
          <img src={PlusIcon} alt="Nova Tecnologia" />
        </Button>
      </span>
      <TechList userData={userData}/>
    </StyledDashMain>
  );
};

export default DashMain;
