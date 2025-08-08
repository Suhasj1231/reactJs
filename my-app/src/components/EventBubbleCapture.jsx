import React from 'react';

const EventBubbleCapture = () => {
  const handleDivClick = () => {
    console.log('DIV Clicked (Bubbling)');
  };

  const handleDivCapture = () => {
    console.log('DIV Clicked (Capturing)');
  };

  const handleButtonClick = () => {
    console.log('BUTTON Clicked');
  };

  return (
    <div
      onClick={handleDivClick}
      onClickCapture={handleDivCapture}
      className="p-10 bg-gray-200 rounded"
    >
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click Me
      </button>
    </div>
  );
};

export default EventBubbleCapture;
