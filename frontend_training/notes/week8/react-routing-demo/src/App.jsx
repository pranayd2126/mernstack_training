import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Technologies from "./components/Technologies.jsx";
import Java from "./components/java.jsx";
import Nodejs from "./components/nodejs.jsx";
import Vue from "./components/vue.jsx";


// import nodejs from "./components/nodejs.jsx";
// import vue from "./components/vue.jsx";
// import Technologies from "./components/Technologies.jsx";
function App() {
  const routingObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/technologies",
          element: <Technologies />,
          children: [
            {
              path: "java",
              element: <Java />
            },
            {
              path: "nodejs",
              element: <Nodejs />,
            },
            {
              path: "vue",
              element: <Vue />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routingObj} />;
}

export default App;
