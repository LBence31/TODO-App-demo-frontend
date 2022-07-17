import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ bg }) => bg || "white"};
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;
