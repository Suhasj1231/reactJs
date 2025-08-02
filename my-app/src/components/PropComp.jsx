import React from 'react';

const PropComp = ({ title = "Default Title", content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default PropComp;
