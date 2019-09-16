import React, { Component } from 'react';

import { handleInitialData } from '../actions/shared';

import { connect } from 'react-redux';

class App extends Component {
	componentDidMount() {
		// use thunk creator
		this.props.dispatch(handleInitialData());
	}

	render() {
		return <div>Starter Code</div>;
	}
}

// if there is no state, then connect has no parameters
export default connect()(App);
