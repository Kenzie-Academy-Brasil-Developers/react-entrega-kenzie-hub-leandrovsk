import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 370px;
  max-width: 95%;
  margin: 0 auto;
  gap: 22px;
  padding: 22px;
  background-color: var(--color-gray-3);

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

  .EyeIcon {
    width: 15px;
    position: absolute;
    right: 20px;
    top: 19px;
    cursor: pointer;
  }

  p {
    align-self: center;
    font-size: 1.2rem;
    color: var(--color-gray-1);
    font-weight: 600;
    margin: 12px 0px;
  }

  a {
    display: flex;
    align-self: center;
    width: 100%;
    text-decoration: none;
  }
`;
