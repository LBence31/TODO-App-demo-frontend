import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #003333;
  padding: 40px 0;
  color: rgb(226, 215, 223);
`;

export const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: inherit;
    margin-left: 20px;
  }
`;

export const Logout = styled.a`
  text-decoration: none;
  color: inherit;
  margin-left: 20px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: inline;
  float: right;
`;

export const H1 = styled.h1`
  font-size: 1.5em;
  display: inherit;
`;
