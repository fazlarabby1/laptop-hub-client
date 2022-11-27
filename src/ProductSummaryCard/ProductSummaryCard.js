import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';

const ProductSummaryCard = ({ product, setProduct }) => {
    const {user} = useContext(AuthContext);
    const [seller, setSeller] = useState(null);
    const { _id, brand, image, location, originalPrice, postedTime, price, productName, sellerName, usedTime, sellerEmail } = product;

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/user/seller?email=${sellerEmail}`)
            .then(res => setSeller(res.data[0]))
    }, [setSeller, sellerEmail]);

    const handleProductReport = (id) =>{
        fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully reported the product');
                }
            })
    }

    const handleWish = (product) =>{
        const booking = {
            name: product.productName,
            email: user.email,
            price,
            productId: product._id,
            productImg: product.image,
            wish: "wished"
        }
        fetch(`${process.env.REACT_APP_API_URL}/bookingwish`, {
            method: 'POST',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successful added to wishlist');
                }
                else {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div className="rounded-md shadow-lg border">
            <div className="flex justify-between p-3">
                <h2 className="text-sm font-semibold leading-none mb-2 flex">Seller Name: <span className='text-violet-700 font-bold'>{sellerName}</span>{seller?.verify && <FaCheckCircle className='text-blue-600 ml-1' />}</h2>
                <p className="flex text-sm leading-none"><FaMapMarkerAlt className='text-blue-700' /> <span>{location}</span></p>
            </div>
            <img src={image} alt="" className="w-4/5 h-60 mx-auto" />
            <div className="p-3">
                <div>
                    <p className='font-semibold'>Brand: <span className='text-violet-700'>{brand}</span></p>
                    <p className='font-semibold'>Model: <span className='text-violet-700'>{productName}</span></p>
                </div>
                <div className='md:flex justify-between'>
                    <p className='font-semibold'>Selling Price: <span className='font-normal'>{price}TK</span></p>
                    <p className='font-semibold'>Original Price: <span className='font-normal'>{originalPrice}TK</span></p>
                </div>
                <div className='md:flex justify-between'>
                    <p className='font-semibold'>Posted Time: <span className='font-normal'>{postedTime}</span></p>
                    <p className='font-semibold'>Purchased Date: <span className='font-normal'>{usedTime}</span></p>
                </div>
                <div className='flex justify-between mt-3'>
                    <button onClick={()=>handleWish(product)} className='btn btn-sm bg-green-600 border-0'>Wishlist</button>
                    <button onClick={()=>handleProductReport(_id)} className='btn btn-sm bg-red-500 border-0'>Submit Report</button>
                </div>
                <div className='flex justify-center mt-5'>
                    <label onClick={() => setProduct(product)} htmlFor="booking-modal" className='btn btn-primary w-1/2'>Purchase</label>
                </div>
            </div>
        </div>
    );
};

export default ProductSummaryCard;