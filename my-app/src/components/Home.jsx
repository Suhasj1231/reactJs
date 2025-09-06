import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
// import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-2xl font-bold">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;
