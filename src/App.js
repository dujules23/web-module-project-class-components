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



  //Add new Tasks

  render() {
    return (
      <div>
        <div>
          <h2>Your Todo's</h2>
          <TodoForm />
        </div>  
        <TodoList />
      </div>
    );
  }
}

export default App;
