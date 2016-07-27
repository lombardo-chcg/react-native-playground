import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import styles from './styles/styles';

import Header from './components/header';
import Test from './components/test';
import ApiDataContainer from './containers/container_api_data';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const Store = createStoreWithMiddleware(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>

        <View style={styles.container}>
          <Header />
          <ApiDataContainer />
        </View>

      </Provider>
    );
  }
}

export default App;
