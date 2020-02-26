import React, {Component} from 'react';
import Table from './components/table.component';
import Form from './components/form.component';

class App extends Component{
  state = {
    characters: [
    ]
  }

  removeCharacter = index => {
    const { characters } = this.state;
    
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({
      characters: [
        ...this.state.characters,
        character
      ]
    });
  }
  
  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <div className="col-md-6 mt-5 card">
          <label>Insert an Item</label>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
        <div className="col-md-8">
          <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        </div>
      </div>
    )
  }
}
export default App;
