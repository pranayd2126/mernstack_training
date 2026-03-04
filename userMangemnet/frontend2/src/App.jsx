import React from "react";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import UserList from "./components/UserList";
import User from "./components/user";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "adduser",
          element: <AddUser />,
        },
        {
          path: "user-list",
          element: <UserList />,
        },
        {
          path: "user/:id",
          element: <User />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;
