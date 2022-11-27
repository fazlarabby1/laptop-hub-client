import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyWishList = () => {
    const { user } = useContext(AuthContext);

    const { data: wishProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['wishProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/bookingwish?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteWish = id => {
        fetch(`${process.env.REACT_APP_API_URL}/bookings/${id}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product deleted successfully');
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-14 lg:ml-14 ml-0'>
            <h1 className='text-2xl font-semibold mb-6'>My Wish List</h1>

            {wishProducts.length ?
                <div className="overflow-x-auto">
                    <p className='text-xl font-semibold mb-6'>Total Products: {wishProducts.length}</p>
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishProducts.map((product, i) => <tr key={product._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{<div className="avatar">
                                        <div className=" rounded-2xl w-20 h-20">
                                            <img src={product.productImg} alt=" " />
                                        </div>
                                    </div>}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        {
                                            product.price && !product.paid &&
                                            <Link to={`/dashboard/payment/${product._id}`}>
                                                <button className='btn btn-primary btn-sm'>Pay</button>
                                            </Link>
                                        }
                                        {product.price && product.paid && <span className='text-green-500'>Paid</span>}
                                    </td>
                                    <td><button onClick={() => handleDeleteWish(product._id)} className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div> :
                <p className='text-2xl font-semibold'>You don't have any orders yet. Please purchase some products</p>
            }

        </div>
    );
};

export default MyWishList;