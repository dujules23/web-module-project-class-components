import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './styles.scss';

const todo = [
  {
    task: "Organize Office",
    id: 1,
    completed: false,
  },
  {
    task: "Transcribe Music",
    id: 2,
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

  // clear completed tasks

  clearCompleted = () => {
    console.log("clearing completed task")

    this.setState({
      ...this.state,
      todo: this.state.todo.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Your Todo's</h2>
          <TodoForm addItem={this.addItem}/>
        </div>  
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}
console.log(todo)
export default App;
