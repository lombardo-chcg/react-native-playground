import { EMPLOYEE_CREATE, EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

const EmployeeFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // const newState = {};
      // newState[action.payload.prop] = action.payload.value;
      // return {...state, ...newState};

      // es6 version:
      return {...state, [action.payload.prop]: action.payload.value};

    case EMPLOYEE_CREATE:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default EmployeeFormReducer;
