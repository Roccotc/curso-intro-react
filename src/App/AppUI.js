import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'

function AppUI() {
    const {
        error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
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
            
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export {AppUI}