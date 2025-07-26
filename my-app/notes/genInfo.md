# 📘 General React Info

## 📌 What is React?

- React is a JavaScript library for building user interfaces.
- It is component-based, declarative, and efficient.

---

## 🔁 SPA vs MPA

- **SPA (Single Page Application)**: Loads a single HTML file, dynamically updates content via JavaScript.
- **MPA (Multi Page Application)**: Every new page load fetches a new HTML from the server.

---

## ⚙️ Toolchain

- Tools like Vite, Webpack, Babel help in transforming and bundling your code.
- CRA (Create React App) and Vite are examples of React toolchains.

---

# 📁 Vite + React Folder Structure Explained

When you run:  
```bash
npm create vite@latest my-app -- --template react


my-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md




---

## ✅ Description Table

| File/Folder       | Purpose                                                                 |
|-------------------|-------------------------------------------------------------------------|
| `node_modules/`   | Auto-generated; holds installed npm packages                            |
| `public/`         | Static files not processed by Vite; available via `/` URL               |
| `src/`            | Contains all your React app source code                                 |
| `App.jsx`         | Root component of your React app                                        |
| `main.jsx`        | Entry file where the React app is mounted to `index.html`               |
| `index.css`       | Global styles                                                           |
| `App.css`         | Styles scoped to App component                                          |
| `assets/`         | Static files (like `react.svg`) imported using ES modules               |
| `index.html`      | The base HTML file with a `<div id="root">`                             |
| `package.json`    | Project settings, npm scripts, and dependencies                         |
| `vite.config.js`  | Vite-specific config (e.g., plugins, aliases)                           |
| `.gitignore`      | Excludes files from Git (e.g., `node_modules/`)                         |
| `README.md`       | Information about your project                                          |

---

# 📘 React Components – Complete Guide

## 🔹 What are React Components?

React components are **reusable, self-contained blocks of code** that return React elements (JSX) to render UI.

There are two main types:
- **Function Components** (modern, preferred)
- **Class Components** (older, still used in legacy apps)

---

## 🧩 Why Use Components?

- Break down UI into manageable, reusable pieces
- Easier to **test**, **maintain**, and **scale**
- Supports **props**, **state**, **lifecycle methods**, and **hooks**

---



