import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Shop from "../../Pages/Shop/Shop";
import Blog from "../../Pages/Blog/Blog";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import BlogDetails from "../../Pages/Blog/BlogDetails";
import ProductDetails from "../../Pages/ProductDetails";
import About from "../../Pages/About/About";
import ScrollToTop from "../../components/ScrollToTop";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
     element: (
      <>
        <ScrollToTop />
        <Main />
      </>
    ),
    children: [
        {
                path:"/",
                element:<Home></Home>

        },
        {
                path:"/home",
                element:<Home></Home>

        },
        {
                path:"/shop",
                element:<Shop></Shop>

        },
        {
                path:"/product/:id",
                element:<ProductDetails></ProductDetails>

        },
       
        {
                path:"/blog",
                element:<Blog></Blog>

        },
        {
                path:"/blog/:id",
                element:<BlogDetails></BlogDetails>

        },
        {
                path:"/about",
                element:<About></About>

        },
        {
                path:"/contact-us",
                element:<ContactUs></ContactUs>

        },
        {
                path:"/signup",
                element:<SignUp></SignUp>

        },
        {
                path:"/login",
                element:<Login></Login>

        },
      
      
],
  },
]);

export default router;
