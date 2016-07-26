import { MAKE_API_CALL } from '../actions/types';

const ApiDataReducer = (state = [], action) => {
  switch (action.type) {
    case MAKE_API_CALL:
     console.log('this should the payload', action)
      return [action.payload.data.value, ...state]
    default:
      return state
  }
}

export default ApiDataReducer;
