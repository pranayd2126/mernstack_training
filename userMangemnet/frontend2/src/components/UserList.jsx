import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUser() {
      setLoading(true);

      try {
        let res = await fetch("http://localhost:3000/user-api/users");
        let result = await res.json();

        setUsers(result.payload);
        console.log("Users are", result.payload);
      } catch (err) {
        setError(err.message);
        console.log("Error is", err);
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, []);

  const navigate = useNavigate();

  const gotouser = (userobj) => {
    navigate(`/user/${userobj._id}`, { state: userobj });
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-600">{error}</h1>;

  return (
    
      <div className="gap-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
          {users.map((user, idx) => (
            <div
              key={idx}
              onClick={() => gotouser(user)}
              className="shadow flex flex-col align-middle justify-center text-center rounded-2xl p-5 cursor-pointer"
            >
              <h1>{user.name}</h1>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default UserList;
