import React, { Component } from 'react';
import countriesSerivces from '../services/country';

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
                const data = await countriesSerivces.getAllCountries();
                this.setState({ data, isLoading: false });
            } catch (error) {
                this.setState({ error, isLoading: false })
            }
        }


        render() {
            if (this.state.isLoading) {
                return <h1>Loading...</h1>
            }

            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }

export default withFetching;