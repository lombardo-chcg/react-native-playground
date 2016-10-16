import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';
import { CardSection, Spinner } from './common';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    //
    // this.dataSource = ds.cloneWithRows(employees);
  }

  renderEmployeeList() {
    if (!this.props.employees) {
      return <Spinner/>;
    }

    return this.props.employees.map(employee => {
      return (
        <CardSection key={employee.uid}>
          <Text style={styles.titleStyle}>{employee.name}</Text>
        </CardSection>
      )
    });
  }

  render() {
    return (
      <View>
        {this.renderEmployeeList()}
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state) => {
  const employees = state.employees;
  const keys = Object.keys(employees)

  if (keys.length === 0) {
    return { };
  };

  const employeesCollection = keys.map(key => {
    let employeeRecord = employees[key];
    employeeRecord.uid = key;

    return employeeRecord;
  })

  return { employees: employeesCollection };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
