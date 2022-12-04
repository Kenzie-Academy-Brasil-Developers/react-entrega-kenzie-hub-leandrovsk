import styled from "styled-components";

export const StyledTechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--color-gray-3);
  padding: 24px;
  border-radius: 0.4rem;
  margin-bottom: 50px;

  .NoTechMessage {
    font-size: 1.8rem;
    align-self: center;
  }
`;
