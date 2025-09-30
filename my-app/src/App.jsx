import React, { useState } from 'react'
import Child from './components/Child';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <Child name="Suhas" /> {/* Will NOT re-render when count changes */}
    </>
  );
}

export default App




// use callback usage : 
/*
import { useState, useCallback } from "react";
import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Child</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // Memoize the handler so it doesn't get re-created on each render
  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}
*/