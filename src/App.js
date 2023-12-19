// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {


  const [count, setCount] = useState(0);


  function Increment(){
    setCount(count + 1);
  }

  function Decrement(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }

  return (
    <div className='App'>
      <div className='Heading'>Increment && Decrement</div>

      <div className='SetOne'>
      <div className='IncrementHandler'> 
      <button className='AddButton' type='submit' onClick={Increment}> + </button> 
      </div>
      <div className='Display'>{count}</div>
      {/* <div className='DecrementHandler'> - </div> */}
      <div className='DecrementHandler'> 
      <button  className='SubtractButton' type='submit' onClick={Decrement} > - </button> 
      </div>
      </div>

      <div className='RestartHandler'>
        <button className='RestartButton' type='submit' onClick={reset}>Restart</button>
      </div>
    </div>
  );
}

export default App;
