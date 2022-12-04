import React from "react";
import { StyledTech } from "./styles";
import TrashIcon from "../../../../assets/img/trash.svg";

const Tech = ({ tech, deleteTech }) => {
  console.log(tech);
  return (
    <StyledTech>
      <h3 className="TechTitle">{tech.title}</h3>
      <span className="TechStatusContainer">
        <p>{tech.status}</p>
        <img src={TrashIcon} alt="excluir tecnologia" onClick={() => deleteTech(tech.id)} />
      </span>
    </StyledTech>
  );
};

export default Tech;
