import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='mt-14 lg:ml-14 ml-0'>
            <h1 className='text-2xl font-semibold mb-6'>My Appointments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{<div className="avatar">
                                    <div className=" rounded-2xl w-20 h-20">
                                        <img src={booking.productImg} alt=" " />
                                    </div>
                                </div>}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn btn-primary btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    {booking.price && booking.paid && <span className='text-green-500'>Paid</span>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;