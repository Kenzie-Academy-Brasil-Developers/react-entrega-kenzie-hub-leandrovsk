import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 118px;
  border-bottom: 1px solid var(--color-gray-2);
  border-top: 1px solid var(--color-gray-2);

  .HeaderContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    height: 100%;
    padding: 0px 20px;
    margin: 0 auto;
  }

  .HeaderContainer p {
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--color-gray-1);
  }
  .HeaderContainer h1 {
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--color-gray-0);
  }
`;
