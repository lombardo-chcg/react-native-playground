import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {

	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input
						label='email'
						placeholder='you@mail.com'
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label='password'
						placeholder='password'
					/>				
				</CardSection>

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>				
			</Card>
		);
	}
}

export default connect(null, { emailChanged })(LoginForm);