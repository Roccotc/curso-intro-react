//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const listaToDo = [
  {text: 'Hacer mercado', completed: true},
  {text: 'Botar basura', completed: false},
  {text: 'Comprar mueble', completed: false},
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {listaToDo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
