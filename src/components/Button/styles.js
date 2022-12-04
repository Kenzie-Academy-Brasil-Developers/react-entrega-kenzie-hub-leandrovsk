import styled from "styled-components";

export const StyledButton = styled.button`
  height: 48px;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: ease 0.3s;

  &.LoginBackToRegister {
    background-color: var(--color-gray-1);
    color: #fff;
  }

  &.LoginSubmit {
    background-color: var(--color-primary);
    color: var(--color-gray-0);
  }
  &.LoginBackToRegister:hover {
    background-color: var(--color-gray-2);
  }

  &.LoginSubmit:hover {
    background-color: var(--color-primary-focus);
    color: #fff;
  }
  &.BackToLogin {
    padding: 0px 16px;
    height: 40px;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);
    font-size: 1.2rem;
    font-weight: 600;
  }

  &.BackToLogin:hover {
    background-color: var(--color-gray-2);
  }

  &.RegisterSubmit {
    background-color: var(--color-primary);
    color: var(--color-gray-0);
  }
  &.RegisterSubmit:hover {
    background-color: var(--color-primary-focus);
  }
  &.Disabled {
    background-color: var(--color-primary-negative);
    pointer-events: none;
    cursor: default;
  }
`;
