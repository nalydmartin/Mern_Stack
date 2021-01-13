import React, {useState} from 'react';

const TodoItem = ({todo, idx, updateTodo, deleteTodo}) => {

    

    const checked = {
        'text-decoration': 'line-through'
    }

    const unChecked = {};

    return (
        <div>
            <h3>TodoItem</h3>

            <p style={todo.completed ? checked : unChecked}>
                {todo.body}: 
                    <input type="checkbox" checked={todo.completed} onClick={ (e) => {updateTodo(idx)}}/>
                    <button onClick={(e) => {deleteTodo(idx)}}>Delete Todo</button>
            </p>


        </div>
    )
}

export default TodoItem; 