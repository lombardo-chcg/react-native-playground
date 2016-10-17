import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { employeesFetch } from '../actions';
import { Spinner } from './common';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    //
    // this.dataSource = ds.cloneWithRows(employees);
  }

  onRowPress() {
    Actions.employeeCreateForm({employee: this.props});
  }

  renderEmployeeList() {
    if (!this.props.employees) {
      return <Spinner/>;
    }

    return this.props.employees.map(employee => {
      return (
        <EmployeeListItem employee={employee} key={employee.uid}/>
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

const mapStateToProps = (state) => {
  const employees = state.employees || {};
  const keys = Object.keys(employees)

  if (keys.length === 0) {
    return { employees: null };
  };

  const employeesCollection = keys.map(key => {
    let employeeRecord = employees[key];
    employeeRecord.uid = key;

    return employeeRecord;
  })

  return { employees: employeesCollection };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
