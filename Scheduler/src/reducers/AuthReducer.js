import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_ATTEMPT_STARTED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	loading: false,
	error: '',
	user: null
};

const AuthReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return {...state, email: action.payload};

		case PASSWORD_CHANGED:
			return {...state, password: action.payload};

		case LOGIN_USER_ATTEMPT_STARTED:
			return {...state, loading: true, error: '',
			};

		case LOGIN_USER_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload};

		case LOGIN_USER_FAIL:
			return {...state, error: action.payload, password: '', loading: false}

		default:
			return state;
	}
}

export default AuthReducer;
