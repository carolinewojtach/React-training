import React from "react";

const Counter = ({ counter, increase, decrease }) => {
  return (
    <div>
      <p>
        Counter
        <strong>{counter}</strong>
      </p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default Counter;
