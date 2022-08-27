import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHelloDispatcher } from '../redux/messageWorld/message';

const Greeting = () => {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.message || '');

  const handleClick = () => {
    dispatch(getHelloDispatcher());
  };

  return (
    <div>
      <h1>
        Greeting:
        {text.texts}
      </h1>
      <button type="button" className="helloBtn" onClick={handleClick}>Get random greeting</button>
    </div>
  );
};

export default Greeting;
