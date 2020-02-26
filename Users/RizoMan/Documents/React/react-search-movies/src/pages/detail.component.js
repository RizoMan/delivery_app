import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/button-back-to-home.component';

const API_KEY = 'ad3574aa';

export default class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: {}
    }

    
    _fetchMovie = ({ id }) => {
        fetch(`http://omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            this.setState({
                movie
            })
        });
    }

    componentDidMount = () => {
        const  { id } = this.props.match.params;
        this._fetchMovie({id});
    }

    render(){
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
        return(
            <div>
                <ButtonBackToHome />
                <h1 className="title">{Title}</h1>
                <img alt={Title} src={Poster}></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}