import React from "react";

const Todo = props => {
    return(
        //input effect that shows item has been completed 
        <div className={`item${props.item.completed ? ' completed' : ''}`} 
        onClick={() => props.toggleCompleted(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;