import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
