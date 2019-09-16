import { RECEIVE_USERS } from '../actions/users';

export default function authedUsers(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...action.users,
				...state
			};
		default:
			return state;
	}
}
