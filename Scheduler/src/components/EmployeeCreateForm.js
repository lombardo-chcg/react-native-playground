import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions'

class EmployeeCreateForm extends Component {

  getPickerOptions() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }

  renderPickerOptions() {
    return this.getPickerOptions().map(option => {
      return <Picker.Item label={option} value={option} key={option}/>
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({name, phone, shift: shift || "Monday"});
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='Bob'
            value={this.props.name}
            onChangeText={(text) => this.props.employeeUpdate({ prop: "name", value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='(555)555-5555'
            value={this.props.phone}
            onChangeText={(text) => this.props.employeeUpdate({ prop: "phone", value: text })}
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={day => {this.props.employeeUpdate({prop: "shift", value: day})}}
          >
            {this.renderPickerOptions()}
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift} = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreateForm);
