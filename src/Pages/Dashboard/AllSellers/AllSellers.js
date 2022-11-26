import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users/sellers`);
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/users/sellers/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Seller is successfully verified');
                    refetch();
                }
            })
    };

    const handleDeleteSeller = id => {
        fetch(`${process.env.REACT_APP_API_URL}/users/sellers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Seller is successfully deleted');
                    refetch();
                }
            })
    }

    return (
        <div className='mt-14 lg:ml-14'>
            <h2 className="text-2xl font-semibold mb-6 text-center underline italic">All Sellers List</h2>
            <h2 className="text-xl font-semibold mb-6">Total Sellers: {sellers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.verify !== 'verified' ?

                                    <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-primary'>Verify</button> : <p className='text-green-500'>Verified</p>}</td>
                                <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;  