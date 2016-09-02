/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  MapView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import data from './data.js'

class MapSource extends Component {

  renderPins() {
    return data;  
  }  

  render() {
    return (
      <View style={styles.container}>
        <MapView

          annotations={this.renderPins()}

          region={{
            latitude: 41.795806,
            longitude: -87.781944,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}

          style={styles.map} 
        />
        <View style={styles.textWrapper}>
          <Text style={styles.text} >latitude: </Text>
          <Text style={styles.text}>longitude: </Text>
          <Text style={styles.text}>cool map bro</Text>
        </View>        
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FcFF'
  },

  map: {
    flex: 3,
    marginTop: 30
  },

  textWrapper: {
    flex: 1,
    alignItems: 'center',  
  },

  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('MapSource', () => MapSource);
