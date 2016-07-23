import axios from 'axios';

import * as types from './types'

const URL = 'http://gentle-lowlands-31515.herokuapp.com/api-test';

export function makeApiCall() {
  const request = axios.get(URL);

  console.log('this is the request', request)

  return {
    type: types.MAKE_API_CALL,
    payload: request
  }
}
