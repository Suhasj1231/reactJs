import { useMemo } from "react";

function ExpensiveComponent({ num }) {
  const expensiveCalculation = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  const result = useMemo(() => expensiveCalculation(num), [num]);

  return <p>Result: {result}</p>;
}

export default ExpensiveComponent
