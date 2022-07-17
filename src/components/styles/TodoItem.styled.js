import styled from "styled-components";

export const Item = styled.li`
  margin: 1rem 0;
`;

export const Content = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }
`;

export const Action = styled.div`
  padding: 1.5rem;
  text-align: center;

  a {
    font: inherit;
    cursor: pointer;
    color: #253d9c;
    border: 1px solid #253d9c;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;

    &:hover,
    &:active {
      background-color: #cee2ed;
    }

  button {
    font: inherit;
    cursor: pointer;
    color: #77002e;
    border: 1px solid #77002e;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;

    &:hover,
    &:active {
      background-color: #ffe2ed;
    }
  }
`;
