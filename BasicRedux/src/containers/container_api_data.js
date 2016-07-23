import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeApiCall } from '../actions/index';
import ApiData from '../components/api_data'

class ApiDataContainer extends Component {
  render() {
    return(
      <ApiData
        apiData={this.props.apiData}
        makeApiCall={this.props.makeApiCall}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeApiCall }, dispatch)
}

function mapStateToProps(state) {
  return { apiData: state.apiData };
}
export default connect(mapStateToProps, mapDispatchToProps)(ApiDataContainer);
