import React from 'react';

const EventComp = ({ handler, msg }) => {
  return (
    <div className="p-4">
      <button 
        onClick={() => handler(msg)} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Trigger Event
      </button>
    </div>
  );
};

export default EventComp;
