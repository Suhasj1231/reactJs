## 🔹 What is useEffect?

A React hook that lets you perform side effects in function components.

Side effects = anything that affects something outside React’s rendering cycle:

Fetching data (API calls)

Subscribing to events (WebSocket, DOM listeners)

Setting timers (setTimeout, setInterval)

Updating document.title

Cleaning up resources


## 🔹 How it works?

Runs after React renders the component (painted to the DOM).

You can control when it runs using the dependency array.


## 🔹 Cleanup in useEffect

If your effect sets up something (like a timer, subscription, or event listener), you should clean it up to avoid memory leaks.


