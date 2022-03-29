//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {AppUI} from './AppUI';
import {ToDoProvider} from '../TodoContext'

function App() {

  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
    
  );
}

export default App;
