import React, { useRef } from "react";

export default function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uncontrolled Form Data:", {
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          ref={nameRef}
          placeholder="Enter Name"
        />
        <br /><br />
        <input
          name="email"
          ref={emailRef}
          placeholder="Enter Email"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <p><b>Live State:</b> No state tracking — values are in DOM</p>
    </div>
  );
}
