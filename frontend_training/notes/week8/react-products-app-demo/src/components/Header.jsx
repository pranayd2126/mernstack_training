import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-200">
      <img
        className="py-2 rounded-50"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/960px-Google_Chrome_icon_%28February_2022%29.svg.png"
        alt=""
        width="80px"
      />
      <nav>
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              {" "}
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              {" "}
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              {" "}
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header
