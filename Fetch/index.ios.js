/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Fetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({ 
      data: this.getDataFromApiAsync()
    })
  }

  getDataFromApiAsync() {
    return fetch('https://gentle-lowlands-31515.herokuapp.com/test')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }    

  render() {
    if (this.state.data === undefined) {
      console.log(this.state.data, "render / if")      
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      );
    } else {
      console.log(this.state.data, "render / else")
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            api done
            {this.state.data.joke}
          </Text>
        </View>         
      )
    }  
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

AppRegistry.registerComponent('Fetch', () => Fetch);
