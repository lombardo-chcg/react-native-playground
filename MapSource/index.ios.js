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
  TouchableOpacity,
  View
} from 'react-native';

import data from './data.js'

class MapSource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lowerTextHeader: "Welcome to the app",
      lowerTextDescription: "Your next great meal awaits"
    }
  }

  renderPins() {
    data.forEach( (pin) => {
      pin.rightCalloutView = (
          <TouchableOpacity
            onPress={() => {
              alert('You Are Here');
            }}>
            <Text>arrow</Text>
          </TouchableOpacity>
        )

      pin.onFocus = () => {
        this.setState({
          lowerTextHeader: pin.title,
          lowerTextDescription: pin.description
        })
      }
    });
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
          <Text style={styles.headerText} > {this.state.lowerTextHeader} </Text>
          <Text style={styles.descriptionText} > {this.state.lowerTextDescription} </Text>
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

  headerText: {
    fontSize: 30
  },

  descriptionText: {
    fontSize: 15
  }  
});

AppRegistry.registerComponent('MapSource', () => MapSource);
