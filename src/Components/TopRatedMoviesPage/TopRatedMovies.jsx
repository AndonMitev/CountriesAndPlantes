import React, { Fragment } from 'react';
import withFetching from '../../hocs/withFetching';
import MovieItem from '../common/MovieItem';

const Movies = props => {

    const { data } = props;

    return (
        <Fragment>
            <h2 className="text-center">Movies</h2>
            {data.map(movie => <MovieItem key={movie.id} movie={movie} />)}
        </Fragment>
    )
}

export default withFetching(Movies);