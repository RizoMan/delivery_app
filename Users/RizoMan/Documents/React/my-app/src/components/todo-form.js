import React, { Component } from 'react';
import '../App.css';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            description: '',
            priority: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return (
            <div className="card col-md-3 mt-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="author" onChange={this.handleInput} className="form-control" placeholder="Author"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-control btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;