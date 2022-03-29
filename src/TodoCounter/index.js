import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {totalToDos, completedToDos} = React.useContext(TodoContext);
    return (
        <h2 className='TodoCounter'>Has completado {totalToDos} de {completedToDos} ToDos</h2>
    );
}

export { TodoCounter };
