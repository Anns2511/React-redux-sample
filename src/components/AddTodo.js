import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = (props) => {
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
    props.addTodo(todoInput);
    setTodoInput("");
  };

  return (
    <div>
      <input onChange={(e) => setTodoInput(e.target.value)} value={todoInput} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
