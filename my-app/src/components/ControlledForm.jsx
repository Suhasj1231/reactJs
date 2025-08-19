import React, { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Form Data:", formData);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "10px", marginBottom: "20px" }}>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <br /><br />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <p><b>Live State:</b> {JSON.stringify(formData)}</p>
    </div>
  );
}
