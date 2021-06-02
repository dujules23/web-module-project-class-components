import React from "react";

const Todo = props => {
    return(
        //input effect that shows item has been completed 
        <div  >
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;