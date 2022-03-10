//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {AppUI} from './AppUI';

const defaultListaToDo = [
  {text: 'Hacer mercado', completed: false},
  {text: 'Botar basura', completed: false},
  {text: 'Comprar mueble', completed: false},
];

function App() {

  const [todoList, setToDos] = React.useState(defaultListaToDo);
  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = todoList.filter(todo => !!todo.completed).length;
  const totalToDos = todoList.length;

  let searchedToDos = [];

  if (!searchValue >= 1){
    searchedToDos = todoList;
  } else {
    searchedToDos = todoList.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeToDo = (text) => {
    const todoIndex = todoList.findIndex(todo => todo.text === text);
    const newToDos = [...todoList];
    newToDos[todoIndex].completed = true;
    setToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const todoIndex = todoList.findIndex(todo => todo.text === text);
    const newToDos = [...todoList];
    newToDos.splice(todoIndex, 1);
    setToDos(newToDos);
  };

  return (
    <AppUI 
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
