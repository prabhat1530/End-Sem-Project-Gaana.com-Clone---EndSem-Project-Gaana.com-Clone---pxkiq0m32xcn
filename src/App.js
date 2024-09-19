import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/LoginIn";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import HomePage from "./Components/Home";


const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/",
    element: <HomePage />
  }
  
  
    ]);


function App() {

  
  

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
      
    </AuthProvider>
  )
}

export default App;
