// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from '../components/Todo'

//import todo's here

const TodoList = props => {

    return(
        <div>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <button>
                Clear Completed
            </button>
        </div>
    )
}


export default TodoList;
