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

class MapSource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin: {
      latitude: 0,
      longitude: 0        
      }
    }
  }
  onRegionChangeComplete(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude       
      }
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <MapView
          annotations={[this.state.pin]}
          style={styles.map} 
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.text} >latitude: {this.state.pin.latitude}</Text>
          <Text style={styles.text}>longitude: {this.state.pin.longitude}</Text>
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
