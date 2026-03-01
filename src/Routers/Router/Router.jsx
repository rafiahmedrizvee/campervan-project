import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Shop from "../../Pages/Shop/Shop";
import Brands from "../../Pages/Brands/Brands";
import Blog from "../../Pages/Blog/Blog";
import ContactUs from "../../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
                path:"/brands",
                element:<Brands></Brands>

        },
        {
                path:"/blog",
                element:<Blog></Blog>

        },
        {
                path:"/contact-us",
                element:<ContactUs></ContactUs>

        },
],
  },
]);

export default router;
