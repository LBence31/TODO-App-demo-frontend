import { React } from "react";
import { useQuery, gql } from "@apollo/client"; //useMutation
import { Link } from "react-router-dom";

import TodoList from "../components/Todos/TodoList";

import {
  TitleContainer,
  ButtonCont,
} from "../components/styles/TitleContainer.styled";
import { Container } from "../components/styles/Container.styled";

const TODOS = gql`
  query GetUserTodos($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        attributes {
          todos {
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
      }
    }
  }
`;

export default function Homepage(props) {
  const { loading, error, data } = useQuery(TODOS, {
    errorPolicy: "all",
    variables: { id: props.user },
    fetchPolicy: "network-only",
  });

  function showHandler() {
    props.seeOtherTodos
      ? props.setSeeOtherTodos(false)
      : props.setSeeOtherTodos(true);
  }

  return (
    <>
      {props.loggedIn ? (
        <Container>
          {error ? (
            <p>Error :(</p>
          ) : (
            <>
              <TitleContainer>
                <h1>Your Todos</h1>
                <ButtonCont>
                  <button onClick={showHandler}>Show Archived/Done</button>
                  <Link to={"/new-todo"} state={{ reFetch: true }}>
                    Create New Todo
                  </Link>
                </ButtonCont>
              </TitleContainer>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {data.usersPermissionsUser.data.attributes.todos.data
                    .length === 0 ? (
                    <p>No data!</p>
                  ) : (
                    <TodoList
                      data={
                        data.usersPermissionsUser.data.attributes.todos.data
                      }
                      seeOtherTodos={props.seeOtherTodos}
                    />
                  )}
                </>
              )}
            </>
          )}
        </Container>
      ) : (
        <Container>
          <h2>Please Register/Login To Start Using The App</h2>
        </Container>
      )}
    </>
  );
}
