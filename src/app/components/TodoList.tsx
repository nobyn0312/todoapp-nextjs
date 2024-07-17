import { Todo } from "@/types";
import React from "react";


interface TodoListProps {
  todos:Todo[];
}

const TodoList = ({todos} :TodoListProps) => {
  return <div>
    <ul>
      <li className="flex justify-between p-4 bg^white border-l-4 border-blue-500 rounded shadow" >
        <span>散歩</span>
        <div>
          <button className="text-green-500 mr-3">edit</button>
          <button className="text-red-500 mr-3">delete</button>
        </div>
      </li>

    </ul>
  </div>;
};

export default TodoList;
