import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import Homepage from "../Pages/Homepage/Homepage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <Homepage></Homepage>
        }
      ]
    },
  ]);

export default router;