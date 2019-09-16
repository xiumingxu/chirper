import { combineReducers } from 'redux';
import authedUsers from './authedUser';
import users from './users';
import tweets from './tweets';

// reducers
export default combineReducers({
	authedUsers,
	users,
	tweets
});
