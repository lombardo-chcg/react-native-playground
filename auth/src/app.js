import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';  // providing a dir path instead of file will cause the 'index' file to be exported automatically 
import * as fb from './firebase_credentials';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: fb.API_KEY,
	    authDomain: fb.AUTH_DOMAIN,
	    databaseURL: fb.DATABASE_URL,
	    storageBucket: fb.STORAGE_BUCKET,
	    messagingSenderId: fb.MESSAGE_SENDER_ID
  	});
	}

	render() {
		return (
			<View>
				<Header headerText='AUTH TIME BABY' />
				<Text>APP</Text>
			</View>
		)
	}
}

export default App;