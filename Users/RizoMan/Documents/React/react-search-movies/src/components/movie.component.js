import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Movie extends Component{
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        poster: PropTypes.string,
        type: PropTypes.string,
        year: PropTypes.string,
    }

    render(){
        const { id, title, poster, year, type } = this.props;

        return(
            <Link to={`detail/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                    <img src={poster} alt={title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-8">{type}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}