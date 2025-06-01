import { useState } from 'react';
import './Counter.css';

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter">
          <button
            className="increase"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          {count}
          <button
            className="decrease"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
      </div>
    </div>
  )
};

export default Counter;