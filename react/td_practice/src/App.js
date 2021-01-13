import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import NewTodo from './components/NewTodo';

function App() {


  // -------- HARD CODING OBJECTS INTO STATE TO PRE-POPULATE THE PAGE ON RENDER -------- //
  const [todos, setTodos] = useState([
    {
      body: "Wash your car",
      completed: false
    },
    {
      body: "Eat breakfast",
      completed: true
    },
    {
      body: "DO laundry",
      completed: false
    },
  ])
  

  // -------------- METHOD TO CREATE A NEW TODO -------------- //
  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  // -------------- METHOD TO UPDATE A TODO BASED ON ITS INDEX -------------- //
  const updateTodo = (index) => {

    const copyTodos =[...todos];

    // ------ IF ITS COMPLETED (TRUE) CHANGE IT TO FALSE (NOT COMPLETED) ------ //
    copyTodos[index].completed = !copyTodos[index].completed;

    setTodos(copyTodos);
  }

  // -------------- METHOD TO DELETE A TODO -------------- //
  const deleteTodo = (deletedIndex) => {

    const copyTodos = todos.filter((todo, index) => {
      if (index !== deletedIndex) {
        return true;
      } else {
        return false;
      }
    })

    setTodos(copyTodos);
  }


  return (
    <div className="App">
      <NewTodo createTodo={createTodo}/>
      
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
