import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {pickRandPrefix} from './prefixes.js';

function ToDo({ todo, index, completeToDo, removeToDo }) {
  return (
    <div
      className="todo"
      style={
        { 
          textDecoration: todo.isCompleted ? "line-through" : ""
        }
      }
    >
      <div className = "action done" onClick={() => completeToDo(index)}>
      <button className = "done" onClick={() => completeToDo(index)}>✔️</button>
      </div>
      {todo.text}
      <div className = "action remove">
        <button className = "remove" onClick={() => removeToDo(index)}>✖️</button>
      </div>
    </div>
  );
};

function ToDoForm({addToDo}){
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    // value += pickRandPrefix();
    addToDo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      /> 
    </form>
  );
};

function App() {
  //argument in useState is default
  //todos is the state variable
  //setToDos we use to set the state variable
  const [todos, setToDos] = React.useState([]);

  const addToDo = text => {
    //copy old todos and add new to do, change state of old todos to new todos using setToDos
    text = String( pickRandPrefix().concat(text) ).toLowerCase();
    const newToDos = [...todos, { text }];
    setToDos(newToDos);
  };

  const completeToDo = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setToDos(newToDos);
  };

  const removeToDo = index => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };

  return (
    <div className="app">

      <div className = "header">
        <div className = "title">
          the mean to-do list ☺
        </div>
        <div className = "credits">
          by torrance cui
        </div>
      </div>
      

      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
          />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
