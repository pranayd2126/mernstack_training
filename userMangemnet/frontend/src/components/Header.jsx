import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className="flex  justify-between items-center px-10 bg-gray-200">
      <img
        className="py-2 rounded-50"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/960px-Google_Chrome_icon_%28February_2022%29.svg.png"
        alt=""
        width="80px"
      />
      <ul className="flex gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Add User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/userlist"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header
