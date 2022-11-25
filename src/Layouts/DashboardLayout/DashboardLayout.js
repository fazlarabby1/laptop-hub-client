import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-white lg:bg-none lg:bg-transparent lg:w-80 w-5/6 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>

                                <li><Link to='/dashboard'>My Products</Link></li>
                                <li><Link to='/dashboard'>Add A Product</Link></li>
                                <li><Link to='/dashboard'>My Buyers</Link></li>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allcustomers'>All Customers</Link></li>
                                <li><Link to='/dashboard'>Reported Items</Link></li>
                           
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;