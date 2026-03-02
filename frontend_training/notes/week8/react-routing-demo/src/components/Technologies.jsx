import React from 'react'
import { NavLink, Outlet } from 'react-router';
function Technologies() {
  return (
    <div>
        <ul className='flex gap-5 text-xl font-bold text-gray-600 justify-center mt-10'>
            <li>
                <NavLink to="Java">Java</NavLink>
            </li>
            <li>
                <NavLink to="nodejs">NodeJS</NavLink>
            </li>
            <li>
                <NavLink to="vue">Vue</NavLink>
            </li>
        </ul>
        {/* paclehoetr for chilren of technolies */}
        <Outlet />
    </div>
  );
}

export default Technologies
