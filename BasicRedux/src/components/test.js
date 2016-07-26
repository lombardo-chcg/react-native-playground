import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import axios from 'axios';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {data: {}}
  }

  componentWillMount() {
    const URL = '//gentle-lowlands-31515.herokuapp.com/test';

    const request = fetch(URL, {type: "GET"})
      .then(function(response) {
        console.log(response)
        this.setState({data: response})
      })
  }

  render() {
    if (this.state.data = {}) {
      return <Text>nada</Text>
    } else {
      return(
        <View>
            <Text>this.state.data.joke</Text>
        </View>
      )
    }
  }
}

export default Test;
