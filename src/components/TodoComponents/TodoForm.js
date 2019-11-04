import React from "react";

const TodoForm = props => {
    return (
        <form className="todo-form">
            <input
            onChange={props.handleTodoChange}
            type="text"
            name="todos"
            value={props.value}
            placeholder="To Do..."
            />
            <button onClick={props.handleAddTodo}>Add to list</button>
            <button onClick={props.handleClearTodolist}>Clear completed</button>
        </form>
    );
};

export default TodoForm;

