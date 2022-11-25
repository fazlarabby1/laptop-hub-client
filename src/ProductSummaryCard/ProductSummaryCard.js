import React from 'react';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ProductSummaryCard = ({ product, setProduct }) => {
    const { brand, image, location, originalPrice, postedTime, price, productName, sellerName, usedTime, verified } = product;
    return (
        <div className="rounded-md shadow-lg border">
            <div className="flex justify-between p-3">
                <h2 className="text-sm font-semibold leading-none mb-2">Seller Name: <span className='text-violet-700 font-bold'>{sellerName}</span>{verified && <FaCheckCircle />}</h2>
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
                    <p className='font-semibold'>Used Time: <span className='font-normal'>{usedTime}</span></p>
                </div>
                <div className='flex justify-center mt-5'>
                    <label onClick={() => setProduct(product)} htmlFor="booking-modal" className='btn btn-primary w-1/2'>Purchase</label>
                </div>
            </div>
        </div>
    );
};

export default ProductSummaryCard;