import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';

class ApiData extends Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this)
    this.renderApiData = this.renderApiData.bind(this)
  }

  buttonClick() {
    this.props.makeApiCall();
  }

  renderApiData() {
    let dataCollection = []
    this.props.apiData.map( (dataItem) => {
      dataCollection.push(
        <Text key={dataItem.id}>
          {dataItem.joke}
        </Text>)
    });
    return dataCollection;
  }

  render() {
    return(
      <View>
        <TouchableHighlight onPress={this.buttonClick}>
          <Text>Make Api Call</Text>
        </TouchableHighlight>
        <ScrollView>
          {this.renderApiData()}
        </ScrollView>
      </View>
    )
  }
}

export default ApiData;
