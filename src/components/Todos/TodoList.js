import React from "react";

import TodoItem from "./TodoItem";

import { ItemUList } from "../styles/TodoList.styled";

export default function TodoList(props) {
  return (
    <ItemUList>
      {props.seeOtherTodos ? (
        <>
          {props.data.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              description={todo.attributes.description}
              expirationDate={todo.attributes.expirationDate}
              status={todo.attributes.status}
            />
          ))}
        </>
      ) : (
        <>
          {props.data.map((todo) => (
            <>
              {todo.attributes.status === "notdone" ? (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  description={todo.attributes.description}
                  expirationDate={todo.attributes.expirationDate}
                  status={todo.attributes.status}
                />
              ) : null}
            </>
          ))}
        </>
      )}
    </ItemUList>
  );
}
