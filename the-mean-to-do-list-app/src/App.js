
import React from 'react';
// import logo from './logo.svg';
import './App.css';

function ToDo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
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
    { text: "1"},
    { text: "2"},
    { text: "3"}
  ]);

  const addToDo = text => {
    //copy old todos and add new to do, change state of old todos to new todos using setTodos
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
