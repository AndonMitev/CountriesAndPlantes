import React, { Component } from 'react';
import countriesSerivces from '../services/movies';
import Loading from '../Components/common/Loading';

const withFetching = (WrappedComponent) =>
    class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: [],
                isLoading: true,
                error: null
            }
        }

        componentDidMount = async () => {
            try {
                const data = await countriesSerivces.getTopRatedMovies();
                this.setState({ data, isLoading: false });
            } catch (error) {
                this.setState({ error, isLoading: false })
            }
        }


        render() {
            if (this.state.isLoading) {
                return <Loading />
            }

            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }

export default withFetching;