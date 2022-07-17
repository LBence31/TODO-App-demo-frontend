import styled from "styled-components";

export const Form = styled.form`
  padding: 1rem;
`;

export const Control = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const Input = styled.input`
  display: block;
  font: inherit;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0.25rem;
  margin: 0 auto;
  width: 50%;
`;

export const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #a50e48;
      border-color: #a50e48;
    }
  }
`;
