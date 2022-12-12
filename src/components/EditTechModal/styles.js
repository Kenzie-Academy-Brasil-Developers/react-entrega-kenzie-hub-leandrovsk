import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(18, 18, 20, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  .ModalContainer {
    width: 369px;
    max-width: 95%;
    height: 342px;
    background-color: var(--color-gray-3);
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .ModalContainer span {
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    background-color: var(--color-gray-2);
  }

  .ModalContainer span h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-gray-0);
  }

  .ModalContainer form {
    display: flex;
    height: 83%;
    flex-direction: column;
    padding: 18px 20px;
    justify-content: space-between;
  }

  .ModalContainer form label {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-gray-0);
  }

  .ModalContainer form > input {
    height: 48px;
    border-radius: 0.4rem;
    padding-left: 1.6rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-gray-1);
    background-color: var(--color-gray-2);
    width: 100%;
  }

  .ModalContainer form > select {
    height: 48px;
    border-radius: 0.4rem;
    color: var(--color-gray-1);
    background-color: var(--color-gray-2);
    padding-left: 1.6rem;
    font-size: 1.6rem;
    font-weight: 400;
    border: none;
    border-right: 12px solid var(--color-gray-2);
  }

  .CloseBtn {
    color: var(--color-gray-1);
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 1.6rem;
  }

  .BtnsContainer {
    display: flex;
    justify-content: space-between;
  }

  &.enabled {
    display: flex;
  }

  &.disabled {
    display: none;
  }
`;
