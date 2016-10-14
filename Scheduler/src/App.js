import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'

import config from '../firebase-config';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config);
	}

	render() {
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hola
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;