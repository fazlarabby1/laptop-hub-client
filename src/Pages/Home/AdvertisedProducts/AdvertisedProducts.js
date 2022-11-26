import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './AdvertiseProducts.css';

const AdvertisedProducts = ({advertisedProducts}) => {

    return (
        <div className='mb-10'>
            <h2 className='text-center text-4xl font-bold text-blue-600 mb-5'>Advertise Products</h2>
            <>
                <Swiper
                    pagination={true} modules={[Pagination]} className="mySwiper"
                >
                    {
                        advertisedProducts.map(product => <SwiperSlide key={product._id}>
                            <div className="w-full md:w-2/4 lg:w-1/3 rounded-md shadow-lg border">
                                <img src={product?.image} alt="" className="w-4/5 h-60 mx-auto" />
                                <div className="p-3">
                                    <div>
                                        <p className='font-semibold'>Brand: <span className='text-violet-700'>{product?.brand}</span></p>
                                        <p className='font-semibold'>Model: <span className='text-violet-700'>{product?.productName}</span></p>
                                    </div>
                                    <div className='md:flex justify-between'>
                                        <p className='font-semibold'>Selling Price: <span className='font-normal'>{product?.price}TK</span></p>
                                        <p className='font-semibold'>Original Price: <span className='font-normal'>{product?.originalPrice}TK</span></p>
                                    </div>
                                    <div className='md:flex justify-between'>
                                        <p className='font-semibold'>Posted Time: <span className='font-normal'>{product?.postedTime}</span></p>
                                        <p className='font-semibold'>Used Time: <span className='font-normal'>{product?.usedTime}</span></p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default AdvertisedProducts;