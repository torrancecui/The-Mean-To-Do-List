
import React from 'react';
// import logo from './logo.svg';
import './App.css';

function ToDo({ todo, index, completeToDo, removeToDo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div className = "actions">
        <button onClick={() => completeToDo(index)}>✅</button>
        <button onClick={() => removeToDo(index)}>❌</button>
      </div>
    </div>
  );
};

function ToDoForm({addToDo}){
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
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
  //setTodos we use to set the state variable
  const [todos, setTodos] = React.useState([
    {
      text: "1",
      isCompleted: false
    },
    {
      text: "2",
      isCompleted: false  
    },
    { 
      text: "3",
      isCompleted: false  
    }
  ]);

  const addToDo = text => {
    //copy old todos and add new to do, change state of old todos to new todos using setTodos
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  };

  const completeToDo = index => {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  };

  const removeToDo = index => {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setTodos(newToDos);
  };

  return (
    <div className="app">

      <div className = "header">
        The MEAN To Do List.
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
