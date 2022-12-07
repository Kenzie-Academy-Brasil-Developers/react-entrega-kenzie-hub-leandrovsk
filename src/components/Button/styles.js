import styled from "styled-components";

export const StyledButton = styled.button`
  height: 48px;
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  transition: ease 0.3s;

  &.LoginSubmit {
    background-color: var(--color-primary);
    color: var(--color-gray-0);
  }
  
  &.LoginSubmit:hover {
    background-color: var(--color-primary-focus);
    color: #fff;
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
  &.Logout {
    background-color: var(--color-gray-3);
    padding: 0px 16px;
    color: var(--color-gray-0);
  }
  &.Logout:hover {
    background-color: var(--color-gray-2);
  }
  &.NewTech {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-3);
    height: 32px;
    width: 32px;
  }
  &.NewTech:hover {
    background-color: var(--color-gray-2);
  }
`;
