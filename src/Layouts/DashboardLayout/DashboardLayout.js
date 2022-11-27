import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdminVerify from '../../hooks/useAdminVerify';
import useSellerVerify from '../../hooks/useSellerVerify';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSellerVerify(user?.email)
    const [isAdmin] = useAdminVerify(user?.email);
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
                    <ul className="menu px-4 bg-white lg:bg-none lg:bg-transparent lg:w-56 w-5/6 text-base-content">

                        <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard'>My Orders</Link></li>
                        <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard/mywishlist'>My Wish List</Link></li>

                        {isSeller &&
                            <>
                                <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li className='hover:bg-violet-700 hover:text-white rounded'><Link >My Buyers</Link></li>
                            </>
                        }
                        {isAdmin &&
                            <>
                                <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard/allcustomers'>All Customers</Link></li>
                                <li className='hover:bg-violet-700 hover:text-white rounded'><Link to='/dashboard/reportedproducts'>Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;