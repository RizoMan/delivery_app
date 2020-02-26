import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return(
        <div>
            <h1 className='title'>404!</h1>
            <h2 className='subtitle'>Oops!, This page doesn't exist!</h2>
            <Link to='/' className='button is-info'>Back to Home</Link>
        </div>
    )
}