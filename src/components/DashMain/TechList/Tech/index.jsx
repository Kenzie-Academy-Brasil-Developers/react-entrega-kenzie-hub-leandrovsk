import React, { useContext } from "react";
import { TechContext } from "../../../../contexts/TechContext";
import { StyledTech } from "./styles";

const Tech = ({ tech }) => {
  const { setEditTechModal, setTechData } = useContext(TechContext);
  return (
    <StyledTech
      onClick={() => {
        setTechData({
          title: tech.title,
          id: tech.id,
        });
        setEditTechModal("enabled");
      }}
    >
      <h3 className="TechTitle">{tech.title}</h3>
      <span className="TechStatusContainer">
        <p>{tech.status}</p>
      </span>
    </StyledTech>
  );
};

export default Tech;
