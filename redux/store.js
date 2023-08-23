import { createStore } from 'redux';

const initialState = {
  message: 'Hello from Redux!',
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
