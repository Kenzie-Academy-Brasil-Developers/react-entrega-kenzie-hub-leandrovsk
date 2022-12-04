import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 370px;
  margin: 0 auto;
  gap: 22px;
  padding: 22px;
  background-color: var(--color-gray-3);
  margin-bottom: 60px;

  h3 {
    align-self: center;
    padding-top: 14px;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-gray-0);
  }

  label {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-gray-0);
    margin-top: 6px;
  }

  span {
    position: relative;
  }

  input {
    height: 48px;
    border-radius: 0.4rem;
    padding-left: 1.6rem;
    border: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-gray-0);
    background-color: var(--color-gray-2);
    width: 100%;
  }

  p {
    align-self: center;
    font-size: 1.2rem;
    color: var(--color-gray-1);
    font-weight: 600;
    margin: 12px 0px;
  }

  select {
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
`;
