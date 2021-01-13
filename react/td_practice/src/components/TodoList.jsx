import React, {useState} from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, updateTodo, deleteTodo}) => {


    return (

        todos.map((todo, index) => 
                <TodoItem todo={todo} index={index} key={index} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        )
    )

}

export default TodoList;