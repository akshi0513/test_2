import React from 'react';
import {BrowserRouter as Router, Routes, Switch } from 'react-router-dom';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <router>
      <div>
        
          <Routes path = "/" element={<TodoList />} />
          <Routes path ="/add" element={<AddTodo />} />
        
      </div>
    </router>
  );
}

export default App;

  
