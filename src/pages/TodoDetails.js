import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery, gql } from "@apollo/client";

import {
  Form,
  Control,
  Actions,
  Input,
} from "../components/styles/Form.styled";
import { Container } from "../components/styles/Container.styled";
import { Card } from "../components/styles/Card.styled";

const TODO = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      data {
        id
        attributes {
          description
          expirationDate
          status
        }
      }
    }
  }
`;

export default function TodoDetails(props) {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [status, setStatus] = useState("");

  const { loading, error } = useQuery(TODO, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
    variables: { id: id },
    onCompleted: (data) => {
      setDescription(data.todo.data.attributes.description);
      if (data.todo.data.attributes.expirationDate !== null) {
        setExpirationDate(data.todo.data.attributes.expirationDate);
      }
      setStatus(data.todo.data.attributes.status);
    },
  });

  //use, reUse, reducer

  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();

    let expDate;

    expirationDate === "" ? (expDate = null) : (expDate = expirationDate);

    const todoData = {
      data: {
        description: description,
        expirationDate: expDate,
        status: status,
      },
    };

    const config = {
      headers: { Authorization: `Bearer ${props.jwt}` },
    };

    await axios
      .put(`http://localhost:1337/api/todos/${id}`, todoData, config)
      .catch((error) => {
        alert(error.response.data.error.message);
      });

    navigate("/");
  }

  return (
    <>
      {error ? (
        <p>Error...</p>
      ) : (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Container>
              <Card>
                <Form onSubmit={submitHandler}>
                  <Control>
                    <label htmlFor="description">Description</label>
                    <Input
                      type="text"
                      required
                      id="description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </Control>
                  <Control>
                    <label htmlFor="date">Expiration Date</label>
                    <Input
                      type="date"
                      id="date"
                      value={expirationDate}
                      onChange={(event) =>
                        setExpirationDate(event.target.value)
                      }
                    />
                  </Control>
                  <Control>
                    <label htmlFor="status">Status</label>
                    <select
                      id="status"
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option value="done">Done</option>
                      <option value="notdone">Not done</option>
                      <option value="archive">Archive</option>
                    </select>
                  </Control>
                  <Actions>
                    <button>Modify</button>
                  </Actions>
                </Form>
              </Card>
            </Container>
          )}
        </>
      )}
    </>
  );
}
