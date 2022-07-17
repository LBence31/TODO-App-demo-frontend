import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Form,
  Control,
  Actions,
  Input,
} from "../components/styles/Form.styled";
import { Container } from "../components/styles/Container.styled";
import { Card } from "../components/styles/Card.styled";

export default function Register(props) {
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const username = enteredEmail.split("@")[0];

    const userData = {
      username: username,
      email: enteredEmail,
      password: enteredPassword,
    };

    await axios
      .post("http://localhost:1337/api/auth/local/register", userData)
      .then((response) => {
        props.setJwt(response.data.jwt);
        props.setUser(response.data.user.id);
        props.setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  }

  return (
    <Container>
      <Card>
        <Form onSubmit={submitHandler}>
          <Control>
            <label htmlFor="email">E-mail</label>
            <Input type="email" required id="email" ref={emailInputRef} />
          </Control>
          <Control>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              required
              id="password"
              ref={passwordInputRef}
            />
          </Control>
          <Actions>
            <button>Register</button>
          </Actions>
        </Form>
      </Card>
    </Container>
  );
}
