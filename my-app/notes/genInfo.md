## React.memo

A higher-order component (HOC) that memoizes a component.

Prevents re-rendering if the props haven’t changed.

It’s a pure component optimization.



## useMemo

A hook that memoizes the result of a function (value).

Used to cache expensive calculations so they don’t run on every render.



## useCallback

A hook that memoizes a function definition.

Useful when passing functions as props to child components (to prevent unnecessary re-renders).


## Use Cases
✅ React.memo

When you want to avoid re-rendering of a pure child component that only depends on props.

Good for static props or rarely changing props.

✅ useMemo

When you have expensive computations (e.g., filtering a large list, doing math, generating derived data).

Use it to cache computed values.

✅ useCallback

When passing functions as props to memoized children (React.memo) to prevent unnecessary renders.

Also useful for dependency arrays (e.g., useEffect).

🔹 Best Practices

Don’t overuse — these tools add complexity and memory overhead.

Use them only when performance problems appear.

For simple values/functions, skip them.

Use useMemo for values

Example: const filteredList = useMemo(() => items.filter(...), [items])

Use useCallback for functions

Example: const handleClick = useCallback(() => {...}, [dependency])

Wrap components in React.memo when:

The component is re-rendering often.

The props rarely change.

Measure performance with React DevTools Profiler before optimizing.