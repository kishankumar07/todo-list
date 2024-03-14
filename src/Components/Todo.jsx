import { useState, useRef,useEffect } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;
const todo = () => {
  let [todos, setTodos] = useState([]);
  let inputRef = useRef(null);
  let add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
  };

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('todos')));
  })

  useEffect(() => {
    
        console.log(todos);
        localStorage.setItem('todos',JSON.stringify(todos));
   
  }, );

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="todo-input"
        />
        <div
          onClick={() => {
            add();
          }}
          className="todo-add-btn"
        >
          ADD
        </div>
      </div>
      <div className="toto-list">
        {todos.map((item,index)=>{
            return <TodoItems key={index} no={item.no} display = {item.display} text={item.text}/>
        })}
      </div>
    </div>
  );
};

export default todo;
