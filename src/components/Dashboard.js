import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component {
	render() {
		return (
			<div className='dashboard'>
				<h3 className='center'> Your Timeline</h3>
				<ul className='dashboard-list'>
					{this.props.tweetsIds.map((id) => {
						// return <li key={id}>Tweet ID: {id}</li>;
						return (
							<li key={id}>
								<Tweet key={id} id={id} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
function makeStateToProps({ tweets }) {
	return { tweetsIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp) };
}
export default connect(makeStateToProps)(Dashboard);
