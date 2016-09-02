/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  MapView,
  NavigatorIOS,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import data from './data.js';

import styles from './styles.js';

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
            onPress={ () => {
              this.showDetailView(pin);
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

  showDetailView(pin){
    this.props.navigator.push({
        title: pin.title,
        component: DetailView,
        passProps: {pin}
    })
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

class Navigator extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Dish Fix',
          component: MapSource
        }} 
        passProps={data} 
      />
    )
  }
}

class DetailView extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
          <Text style={styles.headerText} > {this.props.pin.title} </Text>
          <Text style={styles.descriptionText} > {this.props.pin.description} </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MapSource', () => Navigator);
