import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllCustomers = () => {

    const {data: customers = [], refetch} = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users/allcustomers`);
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteCustomer = id =>{

    }
    return (
        <div className='mt-14 lg:ml-14 ml-0'>
            <h2 className="text-2xl font-semibold mb-6 text-center underline italic">All Customers List</h2>
            <h2 className="text-xl font-semibold mb-6">Total Customers {customers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer, i) => <tr key={customer._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td><button onClick={() => handleDeleteCustomer(customer._id)} className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCustomers;