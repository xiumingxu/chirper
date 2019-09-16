import React, { Component } from 'react';

import { handleInitialData } from '../actions/shared';

import { connect } from 'react-redux';

import Dashboard from './Dashboard';

class App extends Component {
	componentDidMount() {
		// use thunk creator
		this.props.dispatch(handleInitialData());
	}

	render() {
		return <div>{this.props.loading === true ? null : <Dashboard />}</div>;
	}
}

function mapStateToProps({ authedUsers }) {
	return { loading: authedUsers === null };
}
// if there is no state, then connect has no parameters
export default connect(mapStateToProps)(App);
