import { useState } from 'react';
import './App.css';

function App() {
  // 1. Initialize state at 0
  const [count, setCount] = useState(0);

  // 2. Define helper functions
  const increase = () => setCount(count + 1);
  const decrement = () => {
  setCount(prevCount => Math.max(0, prevCount - 1));
};
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>React Counter</h1>
      
      <div className="display">
        {count}
      </div>

      <div className="buttons">
        <button 
  onClick={decrement} 
  disabled={count === 0}
  style={{ opacity: count === 0 ? 0.5 : 1, cursor: count === 0 ? 'not-allowed' : 'pointer' }}
>
  - Decrease
</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+ Increase</button>
      </div>
    </div>
  );
}

export default App;