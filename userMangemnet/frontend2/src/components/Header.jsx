import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div
      className="flex justify-between item-center bg-gray-200 text-algin p-2 px-10
    "
    >
      <img
        className="py-2 rounded-50"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/960px-Google_Chrome_icon_%28February_2022%29.svg.png"
        alt=""
        width="60px"
      />
      <ul className="flex gap-10 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/adduser"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            ADDUSER
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-list"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            USERS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header
