## What are Forms in React?
Forms in React let users input and submit data.
They can be as simple as a textbox or as complex as a multi-step form.
The difference from plain HTML is that React manages form state in JavaScript, not in the DOM.



## Controlled vs Uncontrolled Components

## Controlled Components (Preferred)
Form input value is controlled by React state.

value comes from state, and changes via onChange.

 Advantages:

Single source of truth → Easy validation, manipulation, and debugging.



## Uncontrolled Components
Form input is managed by the DOM itself.

Accessed via ref instead of state.

Useful when you don’t need to re-render on each keystroke.



##  Key Points for React Forms
Always bind value to state for controlled inputs.

Use onChange to sync input with state.

For multiple fields, use object state + [name] syntax.

Use e.preventDefault() to prevent page refresh on form submit.

Controlled forms re-render on each change → better control over data.

Uncontrolled forms are simpler but harder to validate in real time.







