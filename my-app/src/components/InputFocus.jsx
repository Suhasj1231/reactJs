import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // direct access to input element
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" placeholder="Type here..." className="border p-2" />
      <button onClick={handleFocus} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
