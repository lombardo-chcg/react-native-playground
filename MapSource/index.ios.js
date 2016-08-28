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
      <MapView
        annotations={[this.state.pin]}
        style={styles.map} 
        onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('MapSource', () => MapSource);
