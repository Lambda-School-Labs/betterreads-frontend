import { FETCH_USERS_BOOKS } from '../actions';

const initialState = {
	userLibrary: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_USERS_BOOKS:
			return {
				...state,
				userLibrary: action.payload
			};

		default:
			return state;
	}
}
