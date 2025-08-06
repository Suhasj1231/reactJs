## Events : 
🎯 What Are Events in React?
Just like in plain HTML/JavaScript, events in React are used to respond to user actions like clicks, key presses, form submissions, etc.

✅ React wraps browser events in its own system called Synthetic Events to ensure cross-browser compatibility and performance.




## Common Events
Mouse: onClick, onDoubleClick

Keyboard: onKeyDown, onKeyUp

Form: onSubmit, onChange

Focus: onFocus, onBlur

Clipboard: onCopy, onPaste


## 
Events in React are the building blocks of user interactivity.

They allow users to interact with your application (e.g., clicking a button, typing in an input field, submitting a form).

React uses a synthetic event system, which wraps around the browser's native events for better cross-browser compatibility and performance.

React events are similar to DOM events but are named using camelCase and passed as functions.



## 🎮 User Interactivity in React
User interactivity refers to how users engage with your UI and how your application responds. In React, you typically handle interactivity using:

Event Handlers (e.g., onClick, onChange)

State Management (using useState)

Conditional Rendering (e.g., show/hide UI elements)

Form Handling (e.g., submit, validate)



## | Event Type              | Event Prop          | Use Case                      |
| ----------------------- | ------------------- | ----------------------------- |
| `onClick`               | Button clicks       | Toggle, increment, navigation |
| `onChange`              | Input value changes | Forms, filters                |
| `onSubmit`              | Form submission     | Login, search                 |
| `onKeyDown` / `onKeyUp` | Keyboard input      | Accessibility, shortcuts      |
| `onFocus` / `onBlur`    | Input focus events  | Validation, styling           |




## 🧪 Synthetic Events in React
React creates a wrapper around native events called SyntheticEvent to:

Normalize behavior across browsers.

Improve performance with event delegation.

Even though it’s a synthetic event, you can still use:

event.preventDefault()

event.stopPropagation()

event.target.value, etc.
 


## ✅ What is an Event Object?
The event object is automatically passed to an event handler when an event occurs (like click, submit, etc.).
It contains all the details about that specific event—like the target element, mouse position, key pressed, etc.

## | Feature            | Native DOM Event  | React SyntheticEvent         |
| ------------------ | ----------------- | ---------------------------- |
| Scope              | Browser-specific  | Cross-browser normalized     |
| Properties         | Browser-dependent | Standardized across browsers |
| Reusability        | Persistent        | Pooled and reused by default |
| Access after async | ✅ Yes             | ❌ No (unless persisted)      |contentEditable







