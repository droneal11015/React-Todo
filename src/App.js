import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const todolist = [
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
];







class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state= {
      todolist: todolist,
      count: 0
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


  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todolist: [...this.state.todolist, newItem]
    });
  };
 

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todolist: this.state.todolist.filter(item => {
        return !item.completed;
      })
    });
  };
 
 
  render() {
    return (
      <div className="Todo-App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <ListForm addItem={this.addItem} />
        </div>
        <TodoList
          todolist={this.state.todolist}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
          />
      </div>
    );
  } 
}

export default App;
