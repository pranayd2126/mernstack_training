import React from 'react'
import { createBrowserRouter, Router } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import ProductsList from './components/ProductsList'
import ContactUs from './components/ContactUs'
import { RouterProvider } from 'react-router-dom'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element:<RootLayout />,
      children:[
        {
          path: "/",
          element:<Home />
        },
        {
          path: "products",
          element:<ProductsList/> 
        }
        ,
        {
          path:"contact",
          element:<ContactUs />
        }
      ]
    }
  ])

  
   return <RouterProvider router={routerObj} />
  
}

export default App
