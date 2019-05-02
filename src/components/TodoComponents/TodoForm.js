import React from "react";

const TodoForm = props => {
    return (
        <form>
            <inputonChange={props.handleTodoChange}
            type="text"
            name="todo"
            value={props.value}
            placeholder="...todo"
            />
            <button onClick={props.handleAddTodo}>Add to list</button>
            <button onClick={props.handleClearTodos}>Clear completed</button>
        </form>
    );
};

export default TodoForm;