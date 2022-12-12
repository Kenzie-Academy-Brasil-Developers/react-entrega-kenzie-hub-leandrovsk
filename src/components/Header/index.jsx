import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledHeader } from "./styles";

const Header = () => {
  const { userData } = useContext(UserContext);

  return (
    <StyledHeader>
      <span className="HeaderContainer">
        <h1>Olá, {userData?.name}</h1>
        <p>{userData?.course_module}</p>
      </span>
    </StyledHeader>
  );
};

export default Header;
