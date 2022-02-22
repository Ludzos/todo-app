import React from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/todoList"
import { useState, useEffect } from 'react';

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] =useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default:
      setFilteredTodos(todos)
      break;
    }
  };

  const saveLocalTodos = () => {    
      localStorage.setItem('todos', JSON.stringify(todos));
    
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }



  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
      inputText={inputText} 
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filterTodos={filterTodos}
      />      
    </div>
      
  );
}

export default App;
