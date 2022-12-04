import React from "react";
import { StyledHeader } from "./styles";

const Header = ({ userData }) => {
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
