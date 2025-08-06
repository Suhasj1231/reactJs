import React, { useState } from 'react';

const EventComp2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDoubleClick = () => {
    alert("You double-clicked the button!");
  };

  const handleClick = () => {
    console.log("Button single click");
  };

  const handleFocus = () => {
    console.log("Focused on the textbox");
  };

  const handleBlur = () => {
    console.log("Out of textbox");
  };

  const handleCopy = () => {
    alert("Text copied!");
  };

  const handleCut = () => {
    alert("Text cut!");
  };

  const handlePaste = () => {
    alert("Text pasted!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-8 p-6">
      
      {/* Image */}
      <img
        src="https://via.placeholder.com/200"
        alt="Sample"
        className={`transition-all duration-300 rounded-md ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      />

      {/* Button */}
      <button
        className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        Click or Double Click Me
      </button>

      {/* Input Textbox */}
      <input
        type="text"
        className="p-2 rounded text-black w-64"
        placeholder="Enter something"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* Paragraph for Copy/Cut/Paste */}
      <p
        className="w-2/3 text-center mt-4 border border-gray-500 p-4"
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        
      >
        Try to copy, cut or paste inside this editable paragraph!
      </p>
    </div>
  );
};

export default EventComp2;
