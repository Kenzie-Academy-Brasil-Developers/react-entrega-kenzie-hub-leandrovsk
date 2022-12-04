import React from "react";
import { StyledTechList } from "./styles";
import Tech from "./Tech";

const TechList = ({ userData }) => {
  return (
    <StyledTechList>
      {userData?.techs.length !== 0 ? userData?.techs.map((tech) => <Tech key={tech.id} tech={tech} />) : <h1 className="NoTechMessage">Este Usuário não tem tecnologias cadastradas</h1>}
    </StyledTechList>
  );
};

export default TechList;
