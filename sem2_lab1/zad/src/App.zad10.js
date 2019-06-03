import React, { useState, useEffect } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(
    () => {
      document.title = `TODOS: ${todos.length}`;
    },
    [todos]
  );

  const handleButton = () => {
    if (!val) {
      return;
    }
    setTodos([...todos, val]);
    setVal("");
  };

  const handleInput = e => {
    setVal(e.target.value);
  };

  return (
    <div>
      <ul>
        {todos.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <input type="text" value={val} onChange={handleInput} />
      <button onClick={handleButton}>Add</button>
    </div>
  );
};

export default App;
