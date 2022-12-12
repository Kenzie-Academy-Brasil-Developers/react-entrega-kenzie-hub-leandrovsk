import React, { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { StyledTechList } from "./styles";
import Tech from "./Tech";

const TechList = () => {
  const { userData } = useContext(UserContext);
  return (
    <StyledTechList>
      {userData?.techs.length !== 0 ? userData?.techs.map((tech) => <Tech key={tech.id} tech={tech} />) : <h1 className="NoTechMessage">Este Usuário não tem tecnologias cadastradas</h1>}
    </StyledTechList>
  );
};

export default TechList;
