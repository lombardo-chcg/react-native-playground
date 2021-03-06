import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCQ_SiadWDa7Wbg8sWbfRojZ4U_XnvjC6c",
  authDomain: "fbgames-c3a02.firebaseapp.com",
  databaseURL: "https://fbgames-c3a02.firebaseio.com",
  storageBucket: "fbgames-c3a02.appspot.com",
  messagingSenderId: "892804276676"
});

class fbdemo extends Component {

  state = { users: [] }


  componentDidMount() {
    const ref = firebase.database().ref("users");

    ref.on('value', (snapshot) => {
      const collection = snapshot.val();
      const keys = Object.keys(snapshot.val());

      this.setState({
        users: keys.map((key) => {
          let result = collection[key];
          result.key = key;
          return result;
        })
      });
    });
  }

  renderUsers() {
    if (this.state.users.length > 0) {
      return this.state.users.map((user) => {
        return <Text style={styles.instructions} key={user.key}>{user.name}</Text>
      });
    }

    return <Text>Loading...</Text>
  }

  render() {
    return (
      <View style={styles.container}>
          {this.renderUsers()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('fbdemo', () => fbdemo);
