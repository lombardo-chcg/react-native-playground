import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreateForm from './components/EmployeeCreateForm'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="main">
        <Scene
          key='employeeList'
          component={EmployeeList}
          title='Employee List'
          rightTitle='Add'
          onRight={() => Actions.employeeCreateForm()}
        />
        <Scene
          key='employeeCreateForm'
          component={EmployeeCreateForm}
          title='Create New Employee'
        />
      </Scene>

      <Scene initial key="auth">
        <Scene key='login' component={LoginForm} title='Login'/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
