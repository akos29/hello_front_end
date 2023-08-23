import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from './redux/greeting/greetingSlice.js';

const App = () => {
  const greeting = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
    <h1>Hello</h1>
    {greeting? greeting : null}</>);
};

export default App;
