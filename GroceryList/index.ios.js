import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import List from './src/components/list'

class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bob",
      currentInput: '',
      list: ['pizza', 'eggs', 'milk']
    }
  }

  updateList(item) {
    this.setState({
      list: [item, ...this.state.list],
      currentInput: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {this.state.name}'s list!
        </Text>
        <TextInput style={styles.input}
          placeholder='Add something to the list'
          onChangeText={ (text) => {this.setState({currentInput: text})} }
          value={this.state.currentInput}
          autoFocus={true}
          keyboardType='default'
          onSubmitEditing={ (event) => this.updateList(event.nativeEvent.text) }
        />
        <Text>
          {this.state.currentInput}
        </Text>
        <Text>
          <List list={this.state.list} />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  input: {
    height: 40,
    color: 'red',
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('GroceryList', () => GroceryList);
