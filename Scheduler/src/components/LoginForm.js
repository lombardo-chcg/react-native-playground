import firebase from 'firebase'

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { appLaunchAuthCheck, emailChanged, logInUser, passwordChanged } from '../actions';

class LoginForm extends Component {
	componentWillMount() {
  	firebase.auth()
			.onAuthStateChanged(user => {
  			if (user) {
  				this.props.appLaunchAuthCheck(user)
  			}
			});
	}

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.logInUser({email, password})
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large"/>;
		}

		return(
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input
						label='email'
						placeholder='you@mail.com'
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label='password'
						placeholder='password'
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

const mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	}
};

export default connect(mapStateToProps, { appLaunchAuthCheck, emailChanged, logInUser, passwordChanged })(LoginForm);
