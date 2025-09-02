import React, { useState, useEffect } from "react";

function EditUsers() {
  // Step 1: Array of objects (state)
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
  ]);

  const [editUserId, setEditUserId] = useState(null);
  const [newName, setNewName] = useState("");

  // Step 2: useEffect to log when users array changes
  useEffect(() => {
    console.log("Users updated:", users);
  }, [users]);

  // Step 3: Handle edit click
  const handleEdit = (id, currentName) => {
    setEditUserId(id);
    setNewName(currentName);
  };

  // Step 4: Handle save
  const handleSave = () => {
    setUsers(users.map(user =>
      user.id === editUserId ? { ...user, name: newName } : user
    ));
    setEditUserId(null); // exit edit mode
    setNewName("");
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editUserId === user.id ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {user.name} ({user.age} years)
                <button onClick={() => handleEdit(user.id, user.name)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditUsers;
