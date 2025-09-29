## Custom Hooks
🔹 What is a Custom Hook?

A custom hook is just a JavaScript function whose name starts with use.

Inside it, you can use other hooks (useState, useEffect, useReducer, etc.).

Purpose → avoid repeating code and make logic reusable & modular


## useRef hook : 
🔹 What is useRef?

useRef is a React hook that gives you a mutable container whose .current property persists across renders.

Unlike useState, changing a ref does not cause a re-render.

It is commonly used for:

Accessing/manipulating DOM elements (instead of document.querySelector).

Storing mutable values that don’t need to trigger a re-render.

Persisting values between renders (like previous state, timers, counters, etc.).