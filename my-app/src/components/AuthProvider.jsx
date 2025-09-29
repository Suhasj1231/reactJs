import React, { createContext, useReducer } from "react";

// Reducer
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}

// Initial state
const initialAuth = { isAuthenticated: false, user: null };

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Provider
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialAuth);

  return (
    <AuthContext.Provider value={{ auth: state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
