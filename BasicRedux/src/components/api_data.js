import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native';

import styles from '../styles/styles'

class ApiData extends Component {
  constructor(props) {
    super(props);

    this.makeApiCall = this.makeApiCall.bind(this)
    this.renderApiData = this.renderApiData.bind(this)
    this.saveData = this.saveData.bind(this);
    this.loadData = this.loadData.bind(this);

  }

  makeApiCall() {
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

  saveData() {
    AsyncStorage.setItem("jokes", JSON.stringify(this.props.apiData));
  }

  loadData() {
    console.log('hi')
    AsyncStorage.getItem("jokes").then((value) => {
        console.log(JSON.parse(value));
    }).done();    
  }

  render() {
    return(
      <View>
        <TouchableHighlight onPress={this.makeApiCall}>
          <Text style={styles.button}>Make Api Call</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.saveData}>
          <Text style={styles.button}>Save Data</Text>
        </TouchableHighlight>       
        <TouchableHighlight onPress={this.loadData}>
          <Text style={styles.button}>Load Data</Text>
        </TouchableHighlight>           
        <ScrollView>
          {this.renderApiData()}
        </ScrollView>
      </View>
    )
  }
}

export default ApiData;
