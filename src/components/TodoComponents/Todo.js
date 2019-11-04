import React from "react";


const Todo = props => {
    return (
        <div className="item"
            style={props.todo.completed ? {textDecoration: 'line-through'}: null}
            onClick={() => props.handleToggleComplete(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;