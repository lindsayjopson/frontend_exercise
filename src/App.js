import React from 'react';
import TodoList from './components/TodoList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to a Frontend technical exercise.
        </p>
        <div>
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
