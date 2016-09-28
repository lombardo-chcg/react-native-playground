import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';  // providing a dir path instead of file will cause the 'index' file to be exported automatically 
import LoginForm from './components/LoginForm'
import fb from '../firebaseCredentials';


class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: fb.apiKey,
	    authDomain: fb.authDomain,
	    databaseURL: fb.databaseURL,
	    storageBucket: fb.storageBucket,
	    messagingSenderId: fb.messagingSenderId
  	});

  	firebase.auth().onAuthStateChanged((user) => {
  		if (user) {
  			this.setState({loggedIn: true});
  		} else {
  			this.setState({loggedIn: false})
  		}
  	});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
			case false:
				return <LoginForm />;
			default: 
				return <Spinner />
		}
	}

	render() {
		return (
			<View>
				<Header headerText='AUTH TIME BABY' />
				{this.renderContent()}
			</View>
		)
	}
}

export default App;