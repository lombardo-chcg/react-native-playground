import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { ListView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection, Spinner } from './common';

class EmployeeListItem extends Component {
  onRowPress() {
    // the object is added a prop to the rendered component that results from this action
    Actions.employeeCreateForm({employee: this.props.employee});
  }

  render() {
    const employee = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{employee.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default EmployeeListItem;
