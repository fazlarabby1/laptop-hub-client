import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/myproducts?email=${user?.email}`)
            .then(res => setMyProducts(res.data))
            .catch(error => console.error(error))
    }, [user?.email]);

    const handleAdvertise = () =>{
        console.log('clicked');
    };

    return (
        <div className='mt-14 lg:ml-14'>
            <h2 className="text-2xl font-semibold mb-6 underline italic">My Products List</h2>
            <h2 className="text-xl font-semibold mb-6">Total Products: {myProducts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Posted Date</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, i) => <tr key={product._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.postedTime}</td>
                                <td>{product?.advertise !== 'verified' ?

                                    <button onClick={() => handleAdvertise(product._id)} className='btn btn-xs btn-primary'>Advertise</button> : <p className='text-green-500'>Verified</p>}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs bg-red-600 border-0'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;