import { useState } from "react";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");  // lifted state
  const [scale, setScale] = useState("c");             // which scale user typed

  const handleCelsiusChange = (e) => {
    setTemperature(e.target.value);
    setScale("c");
  };

  const handleFahrenheitChange = (e) => {
    setTemperature(e.target.value);
    setScale("f");
  };

  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const celsius = scale === "f" ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === "c" ? toFahrenheit(temperature) : temperature;

  return (
    <div className="p-4 space-y-4">
      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}

function CelsiusInput({ value, onChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

function FahrenheitInput({ value, onChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

export default TemperatureConverter;
