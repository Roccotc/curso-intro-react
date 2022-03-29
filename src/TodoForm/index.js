import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addToDo, setOpenModal} = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo!</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Escribe aqui un ToDo..."></textarea>
            <div className="TodoForm-buttonContainer">
               <button type='button' onClick={onCancel} className="TodoForm-button TodoForm-button-cancel">Cancelar</button>
               <button type='submit' className="TodoForm-button TodoForm-button-add">Añadir</button> 
            </div>
        </form>
    );
}

export { TodoForm };