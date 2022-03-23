import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo,
    loading,
    error}) {

    return (
        <React.Fragment>
            <TodoCounter total={totalToDos} completed={completedToDos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            
            <TodoList>

                {error && <p>Hubo un error al cargar los datos!</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedToDos.length) && <p>¡Crea tu primer ToDo!</p>}

                {searchedToDos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() => completeToDo(todo.text)}
                    onDelete={() => deleteToDo(todo.text)}
                />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUI}