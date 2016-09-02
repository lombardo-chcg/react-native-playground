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

import Icon from 'react-native-vector-icons/FontAwesome';

class MapSource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusPin: {}
    }
  }

  renderPins() {
    data.forEach( (pin) => {

      pin.rightCalloutView = (
          <TouchableOpacity
            onPress={ () => {
              this.showDetailView(pin);
            }}>
            <Text><Icon name="angle-double-right" size={30} color="#900" /></Text>
          </TouchableOpacity>
        )

      pin.onFocus = () => {
        this.setState({
          focusPin: pin
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

  renderLowerView() {
      if (!this.state.focusPin.title) {
        return (
        <View style={styles.textWrapper}>  
          <Text style={styles.headerText} > Welcome to the app </Text>
          <Text style={styles.descriptionText} > Your next great meal awaits </Text>
        </View>    
        )
      } else {
        return (
        <View style={styles.textWrapper}>  
          <TouchableOpacity onPress={ () => {this.showDetailView(this.state.focusPin); }}>        
            <Text style={styles.headerText} > {this.state.focusPin.title} </Text>
            <Text style={styles.descriptionText} > {this.state.focusPin.description} </Text>
          </TouchableOpacity>  
        </View>    
        )
      }
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

        
        {this.renderLowerView()}
     
      </View>  
    );
  }
}

class Navigator extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        barTintColor = '#8FE5FF'
        initialRoute={{
          title: 'Awesome Dish App',
          component: MapSource
        }} 
        passProps={data} 
      />
    )
  }
}

class DetailView extends Component {
  render() {
    console.log('DetailView')
    return (
      <View style={styles.container}>
          <Text style={styles.headerText} > {this.props.pin.title} </Text>
          <Text style={styles.descriptionText} > {this.props.pin.description} </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MapSource', () => Navigator);
