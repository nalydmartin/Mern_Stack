import React, {useState} from 'react';


  // -------------- TODOITEM DISPLAYS TODOS ON HTML -------------- //

const TodoItem = ({todo, index, updateTodo, deleteTodo}) => {



    const checked = {
        'text-decoration': 'line-through'
    };

    const unchecked = {};


    return (

        <div>

            <p style={todo.completed ? checked : unchecked}>{todo.body}:
                <input  type="checkbox" checked={todo.completed} onClick={ (e) => {updateTodo(index)}}  />

                <button onClick={(e) => {deleteTodo(index)}} >Delete</button>
            </p>


        </div>

    );
}

export default TodoItem;