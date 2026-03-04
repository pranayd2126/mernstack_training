import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import User from './components/User'
import {createBrowserRouter, RouterProvider} from 'react-router'

function App() {
  const routerObj=createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path:"/add-user",
          element:<AddUser/>
        },
        {
          path:"userlist",
          element:<UserList/>
        
        },
        {
          path:"/users",
          element:<User/>

        }
      ]

    }
  ])
  return (
    <div>
      <Footer />
      <RouterProvider router={routerObj} />

    </div>
  )
}

export default App
