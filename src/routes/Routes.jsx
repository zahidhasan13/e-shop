import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProducts from "../pages/AddProducts/addProducts";
import Blogs from "../pages/Blogs/Blogs";
import MyProducts from "../pages/MyProducts/MyProducts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'allProducts',
            element: <AllProducts></AllProducts>
        },
        {
            path: 'addProduct',
            element: <AddProducts></AddProducts>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'myProducts',
            element: <MyProducts></MyProducts>
        },
      ]
    },
  ]);

  export default router;