import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryProducts from "../../Pages/CategoryProducts/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Error from "../../Pages/Shared/Error/Error";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllCustomers from "../../Pages/Dashboard/AllCustomers/AllCustomers";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
                path: '/category/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>,
                loader: ({params}) => fetch(`${process.env.REACT_APP_API_URL}/products/${params.id}`),
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allcustomers',
                element: <AllCustomers></AllCustomers>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params}) => fetch(`${process.env.REACT_APP_API_URL}/bookings/${params.id}`),
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
        ]
    }
])