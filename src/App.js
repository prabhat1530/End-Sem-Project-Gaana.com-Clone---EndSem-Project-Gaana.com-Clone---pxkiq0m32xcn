import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/LoginIn";
import Navbar from "./Components/navigationbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Components/Home";

const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element:<Navbar/>,
  //   children:[
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/home",
    element: <HomePage/>
  }
  
  
    ]);


function App() {

  
  

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App;
