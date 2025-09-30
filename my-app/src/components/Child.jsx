import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Rendered:", name);
  return <h3>Hello {name}</h3>;
});

export default Child;
