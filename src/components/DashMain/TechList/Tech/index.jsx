import React from "react";
import { StyledTech } from "./styles";

const Tech = ({ tech, deleteTech }) => {
  return (
    <StyledTech>
      <h3 className="TechTitle">{tech.title}</h3>
      <span className="TechStatusContainer">
        <p>{tech.status}</p>
      </span>
    </StyledTech>
  );
};

export default Tech;
