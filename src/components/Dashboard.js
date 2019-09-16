import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		return (
			<div className='dashboard'>
				<h3> Your Timeline</h3>
				<ul className='dashboard-list'>
					{this.props.tweetsIds.map((id) => {
						console.log('tweetid', id);
						return <li key={id}>Tweet ID: {id}</li>;
					})}
				</ul>
			</div>
		);
	}
}
function makeStateToProps({ tweets }) {
	return { tweetsIds: Object.keys(tweets) };
}
export default connect(makeStateToProps)(Dashboard);
