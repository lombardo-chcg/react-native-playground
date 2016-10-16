import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_ATTEMPT_STARTED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL
} from './types';

export const appLaunchAuthCheck = (user) => {
	console.log('appLaunchAuthCheck', user)
	if (user) {
		return (dispatch) => {
			loginUserSuccess(dispatch, user)
		}
	}
}

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
}

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
}

export const logInUser = ({email, password}) => {
	return (dispatch) => {
		dispatch({type: LOGIN_USER_ATTEMPT_STARTED});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				console.log(error);

				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch, error.message))
			});
	};
};

const loginUserFail = (dispatch, errorMsg) => {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: errorMsg
	});
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	Actions.main();
};
