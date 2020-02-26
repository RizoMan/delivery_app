import React, { Component } from 'react';
import MoviesList from '../components/movies-lists.component';
import SearchForm from '../components/search-form.component';
import {Title} from '../components/title.component';

export default class Home extends Component{

    state = {
        results: [],
        usedSearch: false
    }
    

    _handleResults = (results) => {
        this.setState({
        results,
        usedSearch: true
        });
    }

    _renderResults = () => {
        return this.state.results.length === 0
            ? <p>No hay resultados</p>
            : <MoviesList movies={this.state.results}/>
    }
    render(){
        return(
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                <SearchForm onResults={this._handleResults}/>
                </div>
                {
                this.state.usedSearch 
                ? this._renderResults() 
                : <small>Use the input to write a movie to search</small>
                }
            </div>
        )
    }
}