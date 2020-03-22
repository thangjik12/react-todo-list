import React, { Component } from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
// showing vs-code github setup

class App extends Component {
  render() {
    return (
      <div >
        <div className="container">
          <div className="row">
            <TodoInput/>
           <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


