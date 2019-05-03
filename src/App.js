import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      todolist: [
        {
          task: "Clean Bathroom",
          id: 1,
          completed: false
        },
        {
            task: "Wash Dishes",
            id: 2,
            completed: false
          },
          {
            task: "Organize Pantry",
            id: 3,
            completed: false
          },
          {
            task: "Wash Dogs",
            id: 4,
            completed: false
          },
          {
            task: "Put Away Winter Clothes",
            id: 5,
            completed: false
          },
          {
            task: "Clean Kids Room",
            id: 6,
            completed: false
          },
          {
            task: "Feed Bearded Dragon",
            id: 7,
            completed: false
          },
          {
            task: "Cut Grass",
            id: 8,
            completed: false
          },
      ],
      todos: ''
    };
  }


  addTodo = event => {
    event.preventDefault();
    const newTodo = {task: this.state.todos, completed: false, id: Date.now()};
    this.setState({
      todolist: [...this.state.todolist, newTodo],
      todos: ''
    });
  }

  changeTodo = event => this.setState({[event.target.name]: event.target.value});

  toggleTodoComplete = id => {
    let todolist = this.state.todolist.slice();
    todolist = todolist.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      else {
        return todo;
      }
    });
    this.setState({todolist});
  };

  clearCompletedTodolist = event => {
    event.preventDefault();
    let todolist = this.state.todolist.filter(todo => !todo.completed);
    this.setState({todolist});
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todolist={this.state.todolist}
        />

        <TodoForm
          value={this.state.todos}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodolist={this.clearCompletedTodolist}
        />
      </div>
    );
  }
}

export default App;