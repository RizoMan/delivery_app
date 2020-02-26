import React, {Component} from 'react';
import axios from 'axios';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Existences</th>
                <th>Options</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.existences}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });

    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component{
    state = {
        list: []
    }

    componentDidMount(){
        const uri = 'http://localhost:5000/inventory';

        axios.get(uri)
            .then(res => {
                this.setState({
                    list: res.data
                });
            });
    }

    deleteCharacter(id){
        const uri = 'http://localhost:5000/inventory/delete';
        axios.delete(uri + id)
            .then(res => {
                console.log('blablaba');
            });
    }

    render() {
        const { list } = this.state;

        const { removeCharacter } = this.props;
        console.table(list);
        
        return(
            <div className="tabla">
                <table className="table">
                    <TableHead/>
                    <TableBody characterData={list} removeCharacter={removeCharacter}/>
                </table>
            </div>
        )
    }
}

export default Table;