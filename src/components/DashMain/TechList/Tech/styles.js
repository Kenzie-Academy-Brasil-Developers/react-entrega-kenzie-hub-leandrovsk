import styled from "styled-components";

export const StyledTech = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-gray-4);
  padding: 0px 22px;
  height: 49px;
  border-radius: 0.4rem;

  .TechTitle {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
  }
  .TechStatusContainer {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .TechStatusContainer p {
    color: var(--color-gray-1);
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
