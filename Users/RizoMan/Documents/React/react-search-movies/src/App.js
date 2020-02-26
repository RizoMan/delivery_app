// CSS
import 'bulma/css/bulma.css';
import './App.css';

//Components
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from './pages/detail.component';
import Home from './pages/home.component';
import { NotFound } from './pages/not-found.component';
  
class App extends Component {


  render(){

    //Imperative mode to make a "route system"
    // const url = new URL(document.location);
    // const Page = url.searchParams.has('id')
    // ? <Detail id={url.searchParams.get('id')}/>
    // : <Home />;


    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/detail/:id' component={Detail}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
