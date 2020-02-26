import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Navigation from './components/navigation';
import TodoForm from './components/todo-form';

import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  remove(index){
    if(window.confirm('Are you sure you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i  !== index
        })
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-3">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.author}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.remove.bind(this, i)}>
                borrar
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <Navigation titulo="Tareas" ntareas={this.state.todos.length} />
        <img src={logo} className="App-logo mt-4" alt="logo"></img>
        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo}/>
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
