import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greeting/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (!greeting) {
    return <div className="container"><h3>loading ...</h3></div>;
  }
  return (
    <div className="container">
      <h3>Hello</h3>
      {' '}
      {greeting.greeting}
    </div>
  );
}

export default Greeting;
