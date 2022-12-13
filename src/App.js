import "./App.css";
import { useState } from 'react';

let todo = [
  {    id: 1,    task: "first step",    done: true,  },
  {    id: 2,    task: "first step",    done: false,  },
  {    id: 3,    task: "first step",    done: true,  },
  {    id: 4,    task: "first step",    done: false,  },
];


function ToDo({ todo }) {
  return (
  
<div className="myDiv" key={todo.id}>
<h2>Task number: {todo.id}</h2>
          <h2>task: {todo.task}</h2>
          <h2 style={{color:todo.done ?'green':'red' }}>{todo.done ? '✔':'X'} </h2>
          <hr />
        </div>

  );
}
export default function MyApp() {
  return (
    <div>
      <div className = "space" >
      </div>
        <div className = "tasks">
    {todo.map(todo => {
      return (
        <ToDo
todo=        {todo}
      />
      );
    })}
  </div>
    </div>
  
  );
}
