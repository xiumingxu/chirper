// import {} from '../utils/_DATA';
import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from '../actions/tweets';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginns';

// that is a thunk creator (thunk is for asynchronous features)

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, tweets }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveTweets(tweets));
			dispatch(setAuthedUser(AUTHED_ID));
			dispatch(hideLoading());
		});
	};
}
