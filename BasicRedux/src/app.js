import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles/styles';

import Header from './components/header';
import ApiDataContainer from './containers/container_api_data';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ApiDataContainer />
      </View>
    );
  }
}

export default App;
