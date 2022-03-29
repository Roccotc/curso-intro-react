import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function ToDoProvider(props){

    const {
        item: todoList,
        saveItem: saveToDos,
        loading,
        error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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

    const addToDo = (text) => {
        const newItem = [...todoList];
        newItem.push({completed: false, text});
        saveToDos(newItem);
    };

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, ToDoProvider };
