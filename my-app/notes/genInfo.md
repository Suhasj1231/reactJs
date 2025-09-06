## 🔹 What is useReducer?

A React Hook that is an alternative to useState for managing state.

Useful when:

The state is complex (e.g., objects, nested values, arrays).

State changes involve multiple actions (add, remove, update, toggle).

You want clearer state transitions (instead of scattering many setState calls).




## structure 
const [state, dispatch] = useReducer(reducer, initialState);
state → current state value.

dispatch → function used to trigger state updates (by sending actions).

reducer → a pure function (state, action) => newState.

initialState → starting state.



##
Event (e.g., button click)
       |
       v
dispatch({ type: "increment" })
       |
       v
reducer(state, action)  ---> returns newState
       |
       v
React updates state
       |
       v
Component re-renders with new state





## 🔹 When to Use useReducer vs useState

✅ Use useState when:

State is simple (like count, input value, boolean).

✅ Use useReducer when:

State logic is complex.

State depends on previous state a lot.

Multiple ways to update the same state.


## ------------------------------------------------------------------------
##  Context api

## 🔹 What is Context API?

A built-in feature in React to share data globally across components.

Avoids prop drilling → i.e., passing props through multiple components unnecessarily.

Works like a global store for specific data (theme, user, language, etc.).

Think of it like a delivery service:

You (the provider) send data.

Any component (consumer) in your tree can receive it, without each "middleman" passing it down.

