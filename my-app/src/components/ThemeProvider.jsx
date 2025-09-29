import React, { createContext, useReducer } from "react";

// Reducer
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

// Initial state
const initialTheme = { mode: "light" };

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

// Provider
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme: state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
