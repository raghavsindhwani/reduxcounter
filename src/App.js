import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>COUNTER {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {logged ? <h3>this is personal data not to be showed</h3> : ''}
    </div>
  );
}

export default App;
