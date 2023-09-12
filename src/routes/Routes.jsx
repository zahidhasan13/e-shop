import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProducts from "../pages/AddProducts/addProducts";
import Blogs from "../pages/Blogs/Blogs";
import MyProducts from "../pages/MyProducts/MyProducts";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import NotFound from "../pages/Notfound/NotFound";
import Profile from "../pages/Profile/Profile";

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
        {
            path: 'profile',
            element: <Profile></Profile>
        },
      ]
    },
    {
      path: 'signUp',
      element: <SignUp></SignUp>
    },
    {
      path: 'signIn',
      element: <SignIn></SignIn>
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    },
  ]);

  export default router;