// import { useState, useEffect } from "react";

// function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue]; // works like useState
// }

// // Usage
// function App() {
//   const [name, setName] = useLocalStorage("name", "Suhas");

//   return (
//     <div>
//       <h1>Hello {name}!</h1>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />
//     </div>
//   );
// }
