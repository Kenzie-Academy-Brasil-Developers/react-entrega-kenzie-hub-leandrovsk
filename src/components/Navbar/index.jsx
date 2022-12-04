import React from "react";
import { StyledNavbar } from "./styles";
import Logo from "../../assets/img/logo.svg";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const userLogout = () => {
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <StyledNavbar>
      <img src={Logo} alt="logotipo" />
      <Button type="button" className="Logout" onClick={userLogout}>
        Sair
      </Button>
    </StyledNavbar>
  );
};

export default Navbar;
