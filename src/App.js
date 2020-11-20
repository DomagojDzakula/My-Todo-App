import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //Save Mode
  function getMode() {
    const savedMode = JSON.parse(localStorage.getItem('light'));
    return savedMode || false;
  };
  //State
  const [lightMode, setLightMode] = useState(getMode);
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterdTodos, setFilterdTodos] = useState([]);

  //Use effect
  useEffect(() => {
    localStorage.setItem('light', JSON.stringify(lightMode));
  }, [lightMode]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterdTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterdTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterdTodos(todos);
        break;
    }
  };
  //Save Local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div className='App'>
      <main className={lightMode ? 'light-mode' : 'dark-mode'}>
        <header>
          <h1 className='main'>My Todo List</h1>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          lightMode={lightMode}
          setLightMode={setLightMode}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filterdTodos={filterdTodos}
          inputText={inputText} />
      </main>
    </div>
  );
}

export default App;
