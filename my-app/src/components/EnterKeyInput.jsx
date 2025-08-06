import React from 'react';

const EnterKeyInput = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('You pressed Enter!');
      console.log('Enter was pressed');
    } else {
      console.log(`You pressed: ${event.key}`);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something and press Enter"
        onKeyDown={handleKeyDown}
        className="border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default EnterKeyInput;
