import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoForm from "./todos/TodoForm";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { LabState } from "../../store";
const ReduxExamples = () => {

  const { todo } = useSelector((state: LabState) => state.todosReducer);
  return(
    <div>
      <h2>Redux Examples</h2>
      <AddRedux/>
      <CounterRedux/>
      <HelloRedux/>
      <TodoForm/>
      <TodoItem todo ={ todo}/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;