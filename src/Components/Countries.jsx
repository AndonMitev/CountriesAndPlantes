import React, { Component, Fragment } from 'react';
import withFetching from '../hocs/withFetching';

const Countries = props => {
    console.log(props);
    return (
        <Fragment>
            <h2>Movie List</h2>
        </Fragment >
    )
}

export default withFetching(Countries);