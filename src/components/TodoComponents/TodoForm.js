import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input
            onChange={props.handleTodoChange}
            type="text"
            name="todo"
            value={props.value}
            placeholder="To Do..."
            />
            <button onClick={props.handleAddTodo}>Add to list</button>
            <button onClick={props.handleClearTodos}>Clear completed</button>
        </form>
    );
};

export default TodoForm;