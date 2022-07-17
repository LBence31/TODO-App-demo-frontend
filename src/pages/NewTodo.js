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

export default function NewTodo(props) {
  const navigate = useNavigate();

  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredDescription = descriptionInputRef.current.value;
    let enteredDate;

    dateInputRef.current.value.length === 0
      ? (enteredDate = null)
      : (enteredDate = dateInputRef.current.value);

    const todoData = {
      data: {
        description: enteredDescription,
        expirationDate: enteredDate,
        user: [props.user],
      },
    };

    const config = {
      headers: { Authorization: `Bearer ${props.jwt}` },
    };

    await axios
      .post("http://localhost:1337/api/todos", todoData, config)
      .catch((error) => {
        alert(error.response.data.error.message);
      });

    navigate("/");
  }

  return (
    <Container>
      <Card>
        <Form onSubmit={submitHandler}>
          <Control>
            <label htmlFor="description">Description</label>
            <Input
              type="text"
              required
              id="description"
              ref={descriptionInputRef}
            />
          </Control>
          <Control>
            <label htmlFor="date">Expiration Date</label>
            <Input type="date" id="date" ref={dateInputRef} />
          </Control>
          <Actions>
            <button>Create</button>
          </Actions>
        </Form>
      </Card>
    </Container>
  );
}
