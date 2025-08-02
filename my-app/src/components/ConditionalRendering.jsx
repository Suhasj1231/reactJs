import React from 'react'

const ConditionalRendering = () => {
  return (
    <div>
      
    </div>
  )
}

export default ConditionalRendering


// Example 1: if statement
export const IfExample = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>
  } else {
    return <h2>Please log in</h2>
  }
}

// Example 2: Ternary operator
export const TernaryExample = ({ user }) => {
  return (
    <div>
      {user ? <p>Hello, {user.name}!</p> : <p>Welcome, Guest!</p>}
    </div>
  )
}

// Example 3: && short-circuit
export const AndExample = ({ show }) => {
  return (
    <div>
      {show && <p>This alert is shown only if 'show' is true.</p>}
    </div>
  )
}

// Example 4: || fallback content
export const OrExample = ({ name }) => {
  return <p>User: {name || 'Anonymous'}</p>
}
