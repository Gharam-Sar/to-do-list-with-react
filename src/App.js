import "./App.css";
import { useState } from "react";
import trash from "./imgs/trash.png";
let todo = [];
let s = [];
let searchtask = [];
let searching = false;
if (localStorage.length === 0) {
  localStorage.setItem("ids", 0);

  localStorage.setItem("todo", JSON.stringify(s));
}
window.onload = (event) => {
  MyApp();
};

function ToDo({ todo }) {
 

  return (
    <div className="myDiv" key={todo.id}>
      <h2>Task number: {todo.id}</h2>
      <h2>task: {todo.task}</h2>
      <h2 style={{ color: todo.done ? "green" : "red" }}>
        <pp
          onClick={() => {
            let id = todo.id;
            let displaytodo = JSON.parse(localStorage.getItem("todo"));
            if (displaytodo[id - 1].done) displaytodo[id - 1].done = false;
            else displaytodo[id - 1].done = true;

            localStorage.setItem("todo", JSON.stringify(displaytodo));
            window.location.reload(false);
          }}
        >
          {" "}
          {todo.done ? "✔" : "X"}{" "}
        </pp>

        <img
          onClick={() => {
            let id = todo.id;
            let newtodo = [];
            let ids = parseInt(localStorage.getItem("ids")) - 1;
            let displaytodo = JSON.parse(localStorage.getItem("todo"));
            newtodo = displaytodo.slice(0, id - 1);
            console.log(newtodo);

            for (let i = id - 1; i < ids; i++) {
              console.log(displaytodo[i]);
              let str = displaytodo[i + 1];
              str.id = i + 1;
              newtodo.push(str);
            }
            console.log(newtodo);

            localStorage.setItem("todo", JSON.stringify(newtodo));

            localStorage.setItem("ids", ids);
            window.location.reload(false);
          }}
          src={trash}
          style={{ height: "28px" }}
        ></img>
      </h2>
      <h2></h2>
      <hr />
    </div>
  );
}
function Tasks() {
  let displaytodo = JSON.parse(localStorage.getItem("todo"));

  return (
    <div className="tasks">
      {displaytodo.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
}

// function SearchTasks() {

//   return (
//     <div className = "tasks">
//     {displaytodo.map(todo => {
//       return (
//         <ToDo
// todo=        {todo}
//       />
//       );
//     })}
//   </div>
//   );
// }

function AddTask() {
  const [newtask, settask] = useState("");
  const storedtodo = JSON.parse(localStorage.getItem("todo"));
  todo = storedtodo.slice(0);
  const add_task = (event) => {
    console.log("should dd");
    let new_id = parseInt(localStorage.getItem("ids")) + 1;
    todo.push({ id: new_id, task: newtask, done: false });
    localStorage.setItem("todo", JSON.stringify(todo));

    localStorage.setItem("ids", new_id);
    window.location.reload(false);
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <label>Task</label> &nbsp;
            </td>
            <td>
              <input
                type="text"
                id="taskName"
                name="task name"
                value={newtask}
                onChange={(e) => settask(e.target.value)}
              />
            </td>
            <td>
              &emsp;&nbsp;
              <button className="addButton" onClick={add_task}>
                {" "}
                Add{" "}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function SearchBar() {
  const [filterText, setFilterText] = useState("");
  
  return (
    <div className="componant" aria-roledescription="search">
      <input
                      onChange={(e) => searching=true}

        type="search"
        className="searchBar"
        placeholder="Search for a task"
      />
    </div>
  );
}
function Footer() {
  let storedtodo = JSON.parse(localStorage.getItem("todo"));
 let num_todo=storedtodo.length;
let done=0;
let notDone=0;
for (let i=0;i<storedtodo.length;i++){
  if(storedtodo[i].done) done++;
  else notDone++;
}
  return (
    <div style={{color:'white',
    fontSize:'20px'}} className="componant" >
     Number of to dos in the list= {num_todo} ----  Number of done to dos= {done} ---- Number of to be done to dos= {notDone} 
     
    </div>
  );
}
export default function MyApp() {
  return (
    <div>
      <div className="componant">
        {" "}
        <AddTask />
      </div>
      <hr></hr>

      <div>
        {" "}
        <SearchBar />
      </div>
      <hr></hr>
      <div >    <Tasks /></div>
  
      {/* {searching : <SearchTasks/> ?<Tasks/> }  */}
      <hr></hr>
<Footer></Footer>
    </div>
  );
}
