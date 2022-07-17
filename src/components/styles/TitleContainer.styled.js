import styled from "styled-components";

export const TitleContainer = styled.div`
  color: hsl(192, 100%, 9%);
  width: 1000px;
  max-width: 100%;
  display: inline-felx;

  h1 {
    display: inline;
  }
`;

export const ButtonCont = styled.div`
  position: relative;
  margin-left: auto;
  right: 0;
  height: 40px;

  a {
    font: inherit;
    height: inherit;
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
  }

  button {
    font: inherit;
    margin-right: 5px;
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
  }
`;
