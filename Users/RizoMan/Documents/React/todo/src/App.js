import React, { Component } from 'react';
import { TodoBanner } from './components/todo-banner.component';
import { TodoRow } from './components/todo-row.component';
import { TodoCreator } from './components/todo-creator.component';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      //newItemText: ""
    }

  }

  updateNewTextItem = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  }
  
  handleClick = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Maraco" : "Adam" 
    });
  }

  createNewTodo = (task) => {
    if(!this.state.todoItems.find(item => item.action === task)){
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          {
            action: task,
            done: false
          }
        ],
        newItemText: ""
      });
    }
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => 
        item.action === todo.action ? 
        { ...item,
          done: !item.done
        }: item)
    });
  }
  

  todoTableRows = () => 
    this.state.todoItems.map(item =>
      <TodoRow key={ item.action } item={ item } callback={ this.toggleTodo }/>
    );
  
  render = () => {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems}/>
        <button type="button" className="btn btn-primary m-2" onClick={this.handleClick}>Change</button>
        <TodoCreator callback={this.createNewTodo}/>
        <table className="table table-sriped table-bordered">
          <thead>
            <tr>
              <th>
                Description
              </th>
              <th>
                Done
              </th>
            </tr>
          </thead>
          <tbody>
            {this.todoTableRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
