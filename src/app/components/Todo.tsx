"use client"

import { Task } from "@/types";
import React, { useState } from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({todo} :TodoProps) => {
  const [isEditing,setIsEditing] =useState(false);

  const handleEdit =async()=>{
    setIsEditing(true)
  }

  return (
    <li key={todo.id} className="flex justify-between p-4 bg^white border-l-4 border-blue-500 rounded shadow" >

      {isEditing ? (
        <input type="text" className="mr-2 py-1 px-2 rounded border-gray-400 border"/>
        ) : (
          <span>{todo.text}</span>
        )}
    <div>
      <button className="text-green-500 mr-3" onClick={handleEdit}>edit</button>
      <button className="text-red-500 mr-3">delete</button>
    </div>
    </li>
  )
};

export default Todo;