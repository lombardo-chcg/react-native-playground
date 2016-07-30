var React = require('react');
var ReactNative = require('react-native');
var t = require('tcomb-form-native');

var {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;
 
var STORAGE_KEY = 'id_token';

var Form = t.form.Form;

var Person = t.struct({
  username: t.String,
  password: t.String
});

const options = {};

import styles from './styles'

var AuthApp = React.createClass({

  getInitialState() {
    return {
      loggedIn: false
    }
  },

  async componentDidMount() {
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    if (DEMO_TOKEN) {
      this.setState({loggedIn: true})
    }
  },

  async _onValueChange(item, selectedValue) {
    console.log(item, selectedValue, '_onValueChange');
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },
 
  async _getProtectedQuote() {
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    console.log(DEMO_TOKEN, '_getProtectedQuote');
    fetch("http://localhost:3001/api/protected/random-quote", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + DEMO_TOKEN
      }
    })
    .then((response) => response.text())
    .then((quote) => { 
      AlertIOS.alert(
        "Chuck Norris Quote:", quote)
    })
    .done();
  },

  async _userLogout() {
    console.log('_userLogout');
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      this.setState({loggedIn: false}),
      AlertIOS.alert("Logout Success!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },

  _userSignup() {
    console.log('_userLogout');
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch("http://localhost:3001/users", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username, 
          password: value.password, 
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        this._onValueChange(STORAGE_KEY, responseData.id_token),
        this.setState({loggedIn: true}),
        AlertIOS.alert(
          "Signup Success!",
          "Click the button to get a Chuck Norris quote!"
        )
      })
      .done();
    }
  },

  _userLogin() { 
    console.log('_userLogout');
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      fetch("http://localhost:3001/sessions/create", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: value.username, 
          password: value.password, 
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        AlertIOS.alert(
          "Login Success!",
          "Click the button to get a Chuck Norris quote!"
        ),
        this._onValueChange(STORAGE_KEY, responseData.id_token),
        this.setState({loggedIn: true})
      })
      .done();
    } 
  },

  render() {
    console.log('render', this.state)

    if (this.state.loggedIn === false) {
      return(
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Signup/Login</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>  
        <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={this._userSignup} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
    }

    if (this.state.loggedIn === true) {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>get Chuck Norris Quotes!</Text>
        </View>
               <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={this._userLogout} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>    
          <TouchableHighlight onPress={this._getProtectedQuote} style={styles.button}>
            <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );

    }
  }
});

AppRegistry.registerComponent('AuthApp', () => AuthApp);
