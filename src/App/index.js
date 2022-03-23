//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {AppUI} from './AppUI';

/*const defaultListaToDo = [
  {text: 'Hacer mercado', completed: false},
  {text: 'Botar basura', completed: false},
  {text: 'Comprar mueble', completed: false},
];*/

function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }

    }, 3000);
  });

  const saveItem = (newItem) => {
    try{
      const strItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, strItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };

}

function App() {

  const {
    item: todoList,
    saveItem: saveToDos,
    loading,
    error} = useLocalStorage('TODOS_V1', []);
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
    const newItem = [...todoList];
    newItem[todoIndex].completed = true;
    saveToDos(newItem);
  };

  const deleteToDo = (text) => {
    const todoIndex = todoList.findIndex(todo => todo.text === text);
    const newItem = [...todoList];
    newItem.splice(todoIndex, 1);
    saveToDos(newItem);
  };

  return (
    <AppUI
      error={error}
      loading={loading}
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
