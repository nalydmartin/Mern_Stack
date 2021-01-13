import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import NewTodo from './components/NewTodo';
import TodosList from './components/TodosList';
import TodoItem from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState([
    {
      body: "Create todo list.",
      completed: false
    },
    {
      body: "Laundry",
      completed: true
    },
    {
      body: "Get Car Wash",
      completed: false
    },
    {
      body: "Eat Lunch",
      completed: true
    },
  ])


  const updateTodo = (idx) => {
    const copyTodos = [...todos];

    copyTodos[idx].completed = !copyTodos[idx].completed;

    setTodos(copyTodos);
  }

  const deleteTodo = (deletedIdx) => {
    const copyTodos = todos.filter((todo, idx) => {
      if (idx !== deletedIdx) {
        return true;
      } else {
        return false;
      }
    });

    setTodos(copyTodos);
    // Single line of code way to handle deleting a todo
    //setTodos(todos.filter((todo, idx) => idx !== deletedIdx ? true : false));
  }


  const newTodo = (todo) => {

    setTodos([...todos, todo]); 
  }

  return (
    <div className="App">
      <h1>App is wrapping everything!</h1>
      <NewTodo createTodo={newTodo}/>
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
