import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user-api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users); // adjust based on your API
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {users.map((user) => (
        <div
          key={user._id}
          className="w-96 bg-white shadow-md p-6 rounded-md mb-4"
        >
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
