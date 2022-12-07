import styled from "styled-components";

export const StyledRegisterHeader = styled.header`
  display: flex;
  align-items: center;
  width: 370px;
  max-width: 95%;
  justify-content: space-between;

  .BackToLogin {
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 0.4rem;
    cursor: pointer;
    border: none;
    padding: 0px 16px;
    height: 40px;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);
    font-size: 1.2rem;
    font-weight: 600;
    transition: ease 0.3s;
  }

  .BackToLogin:hover {
    background-color: var(--color-gray-2);
  }
`;
