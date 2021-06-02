import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const todo = [
  {
    task: "Organize Office",
    id: Date.now(),
    completed: false,
  },
  {
    task: "Transcribe Music",
    id: Date.now(),
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todo: todo
    }
  }

  //Class Methods to Update State


  // Toggle Completed Tasks
  toggleCompleted = (itemId) => {
    console.log("Toggling completed flag, item", itemId);
    const updatedTodo = this.state.todo.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    });
    console.log("completed todo", updatedTodo);
    this.setState({
      ...this.state,
      todo: updatedTodo
    });
  }



  //Add new Tasks

  addItem = (itemName) => {
    console.log("adding item", itemName);
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todo: [
        ...this.state.todo,
        newItem
      ]
    })
  }


  render() {
    return (
      <div>
        <div>
          <h2>Your Todo's</h2>
          <TodoForm addItem={this.addItem}/>
        </div>  
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}
console.log(todo)
export default App;
