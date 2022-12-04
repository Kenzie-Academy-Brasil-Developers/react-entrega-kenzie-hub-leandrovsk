import React from "react";
import { StyledButton } from "./styles";

const Button = ({ children, className, type, onClick}) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
