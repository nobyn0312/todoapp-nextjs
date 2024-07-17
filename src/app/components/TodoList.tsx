import { Task } from "@/types";
import React from "react";
import Todo from "./Todo";


interface TodoListProps {
  todos:Task[];
}

const TodoList = ({todos} :TodoListProps) => {
  return <div>
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </ul>
  </div>;
};

export default TodoList;
