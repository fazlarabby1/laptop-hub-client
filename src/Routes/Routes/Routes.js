import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/allproducts/:id',
                element: <CategoryProducts></CategoryProducts>
            },
        ]
    }
])