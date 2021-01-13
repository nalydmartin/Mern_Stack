import React, {useState} from 'react';

const NewTodo = ({createTodo}) => {

    const [todoText, setTodoText] = useState("");


    

    return (

        <div>

            <form>
                <input  type="text"  />
            </form>



        </div>

    )

}

export default NewTodo;