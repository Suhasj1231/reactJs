import React, { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), name: action.payload }];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "add", payload: input });
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          ✅ Todo List
        </h2>

        {/* Input & Button */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        {/* Todo Items */}
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-800 dark:text-white">{todo.name}</span>
              <button
                onClick={() =>
                  dispatch({ type: "remove", payload: todo.id })
                }
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {todos.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            No tasks yet. Add one!
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
