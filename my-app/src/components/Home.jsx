import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";

function Home() {
  const { theme, dispatch: themeDispatch } = useContext(ThemeContext);
  const { auth, dispatch: authDispatch } = useContext(AuthContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme.mode === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">
        Current Theme: {theme.mode}
      </h1>
      <button
        onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}
        className="px-4 py-2 mb-6 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Toggle Theme
      </button>

      <h2 className="text-xl mb-2">
        {auth.isAuthenticated
          ? `Welcome, ${auth.user.name}!`
          : "You are not logged in."}
      </h2>
      <div className="space-x-4">
        <button
          onClick={() =>
            authDispatch({ type: "LOGIN", payload: { name: "Suhas" } })
          }
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
        >
          Login
        </button>
        <button
          onClick={() => authDispatch({ type: "LOGOUT" })}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
