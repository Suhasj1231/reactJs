import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log(count)
  console.log(useState())

  const handleClick = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
    //   console.log("Updated count:", newCount);
      return newCount;
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}
