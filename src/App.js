import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from './redux/greeting/greetingSlice';

function App() {
  const greeting = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <>
      <h1>Welcome!</h1>
      {greeting?.greeting || null}
    </>
  );
}

export default App;
