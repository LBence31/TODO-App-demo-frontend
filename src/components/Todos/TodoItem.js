import React from "react";
import { Link } from "react-router-dom";

import { Item, Content, Action } from "../styles/TodoItem.styled";
import { Card } from "../styles/Card.styled";

export default function TodoItem(props) {
  //useCallback
  function backGroundColorSelect() {
    if (props.status === "notdone") return "#fff";
    if (props.status === "done") return "#00a836";
    if (props.status === "archive") return "#9ac0d4";
    //#ff3500 priority
  }

  return (
    <Item>
      <Card bg={backGroundColorSelect}>
        <Content>
          <h3>{props.description}</h3>
          <h3>
            Do until: {props.expirationDate ? props.expirationDate : "Not set"}
          </h3>
          <h3>{props.status}</h3>
        </Content>
        <Action>
          <Link to={`todo/${props.id}`}>Modify</Link>
        </Action>
      </Card>
    </Item>
  );
}
