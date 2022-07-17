import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  StyledHeader,
  Container,
  Nav,
  H1,
  Logout,
} from "../styles/Header.styled";

export default function Header(props) {
  const navigate = useNavigate();

  function logoutHandler() {
    props.setLoggedIn(false);
    props.setUser(0);
    props.setJwt("");
    navigate("/");
  }

  return (
    <div>
      <StyledHeader>
        <Container>
          <Link to="/">
            <H1>Todo App</H1>
          </Link>
          <Nav>
            {props.loggedIn ? (
              <Logout onClick={logoutHandler}>
                <H1>Logout</H1>
              </Logout>
            ) : (
              <>
                <Link to="/register">
                  <H1>Register</H1>
                </Link>
                <Link to="/login">
                  <H1>Login</H1>
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </StyledHeader>
    </div>
  );
}
