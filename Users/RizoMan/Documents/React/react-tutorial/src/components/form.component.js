import React, { Component } from 'react';

class Form extends Component{

    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const { name, job } = this.state;

        return(
            <form>
                <div className="form-group">
                    <input type="text" 
                    name="name" 
                    id="name" 
                    value={name} 
                    onChange={this.handleChange} 
                    placeholder="Name" 
                    className="form-control"/> 
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}
                    placeholder="Job"
                    className="form-control" />
                </div>
                <div className="form-group">
                    <input type="button" value="Submit" onClick={this.submitForm} className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}

export default Form;