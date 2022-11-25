import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data: sellers = [], refetch} = useQuery({
        queryKey: [],
        queryFn: async () =>{
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users/sellers`);
            const data = await res.json();
            return data;
        }
    })
    return (    
        <div className='mt-14 lg:ml-14 ml-0'>
            <h2 className="text-2xl font-semibold mb-6">All Sellers</h2>
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
                            sellers.map((seller, i) =><tr key={seller._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{ seller?.role !== 'verified' ?
                            // onClick={()=>handleVerify(seller._id)}
                                <button className='btn btn-xs btn-primary'>Verify</button> : <p className='text-green-700'>Verified</p>}</td>
                            <td><button className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;  