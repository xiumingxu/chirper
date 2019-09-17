import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';
import { formatDate } from '../utils/helpers';
// import { TiHeartOutlin } from 'react-icons/lib/ti';
// import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline';

class Tweet extends Component {
	redirectToParent = (e, parentid) => {
		console.log('todo: redirect to parent');
	};
	render() {
		const { tweet, authedUsers } = this.props;

		// console.log('tweets[0]', Object.keys(tweets[id]));
		// console.log('author', tweets[id].author);
		// console.log('author', typeof tweets[id].author);
		const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } = tweet;

		return (
			<div className='tweet'>
				{/* alt for accessiblity (for people who cannot see that) */}
				<img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
				<div className='tweet-info'>
					<div>
						<span>{name}</span>
						<div> {formatDate(timestamp)} </div>
						{parent && (
							<button className='replying-to' onClick={(e) => this.redirectToParent(e, parent.id)}>
								Replying to @{parent.author}
							</button>
						)}
					</div>
					{/* {parent === null ? null : <div onClick={this.redirectToParent}>Replying to {parent.author}</div>} */}
					<p>{text}</p>

					<div className='tweet-icons'>
						<div className='tweet-icon' />
						<span>{replies !== 0 && replies}</span>
						<button className='heart-button' onClick={this.handleLike}>
							{hasLiked === true ? (
								<button color='#e0245e' className='tweet-icon' />
							) : (
								<button className='tweet-icon' />
							)}
						</button>
						<span>{likes !== 0 && likes}</span>
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps({ tweets, authedUser, users }, { id }) {
	const tweet = tweets[id];

	const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

	// console.log('author', typeof tweet.author);

	return { authedUser, tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null };
}
// function mapStateToProps({ authedUser, users, tweets }, { id }) {
// 	const tweet = tweets[id];
// 	const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
// 	return {
// 		authedUser,
// 		tweet      : tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
// 	};
// }

export default connect(mapStateToProps)(Tweet);
