import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import * as selectors from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (state) => {
  const todos = selectors.getTodosByVisibilityFilter(
    state,
    state.visibilityFilter
  );
  console.log("todos", todos);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
