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
      todolist: ''
    };
  }

  toggleItem = itemId => {
    this.setState({
      todolist: this.state.todolist.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };


addTodo = event => {
  event.preventDefault();
  const newTodo = {task: this.state.todolist, completed: false, id: Date.now()};
  this.setState({
    todolist: [...this.state.todolist, newTodo],
    todo: ''
  });
}
}

export default App;