import "./App.css";
import { useState } from 'react';

let todo = [];
let s=[];
if(localStorage.length==0){localStorage.setItem('ids',0);

localStorage.setItem('todo', JSON.stringify(s));

}
window.onload = (event) => {
  MyApp();
};
function ToDo({ todo }) {

  return (
  
<div className="myDiv" key={todo.id}>
<h2>Task number: {todo.id}</h2>
          <h2>task: {todo.task}</h2>
          <h2 style={{color:todo.done ?'green':'red' }}>{todo.done ? '✔':'X'} 
          {/* onClick={update_task(todo.id)} */}
          </h2>
          <hr />
        </div>

  );
}
function Tasks() {
  let displaytodo = JSON.parse(localStorage.getItem('todo'));
  
  return (
    <div className = "tasks">
    {displaytodo.map(todo => {
      return (
        <ToDo
todo=        {todo}
      />
      );
    })}
  </div>
  );
  window.location.reload(false);
}

function Add_task() {
  const [newtask, settask] = useState("");
  const storedtodo = JSON.parse(localStorage.getItem('todo'));
  todo= storedtodo.slice(0)
  const add_task = (event) => {
    console.log("should dd");
    let new_id=parseInt(localStorage.getItem('ids')) +1;
   todo.push( {    id: new_id,    task: newtask,    done: false,  },);
   localStorage.setItem('todo', JSON.stringify(todo));

    localStorage.setItem('ids', new_id);
    window.location.reload(false);
  }
  return (
<div>
          <table>
            <tr>
              <td> <label for="taskName">Task</label> &nbsp;</td>
              <td><input type="text" id="taskName" name="task name" value={newtask}  onChange={(e) => settask(e.target.value)}
       /></td>
              <td>&emsp;&nbsp;
          <button className="addButton" onClick={add_task} > Add </button>
        </td>
            </tr>
          </table>
</div>

  );
}

export default function MyApp() {
  return (
    <div>
    <div className="componant">  <Add_task/></div>
     <hr></hr>
    
   <Tasks></Tasks>


   
    </div>
  
  );
}
