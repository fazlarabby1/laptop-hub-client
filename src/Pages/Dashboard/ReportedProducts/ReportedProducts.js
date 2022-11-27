import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';

const ReportedProducts = () => {

    const { data: reportedProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/reportedproducts`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    });

    const handleDeleteProduct = (id) =>{
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product is successfully deleted');
                    refetch();
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-14 lg:ml-14'>
            <h2 className="text-2xl font-semibold mb-6 underline italic">Reported Products List</h2>
            <h2 className="text-xl font-semibold mb-6">Total Reported Products: {reportedProducts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reportedProducts.map((product, i) => <tr key={product._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{<div className="avatar">
                                    <div className=" rounded-2xl w-20 h-20">
                                        <img src={product.image} alt=" " />
                                    </div>
                                </div>}</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product?.paid ? 'Paid' : 'Available'}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedProducts;