import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'

const BannerItem = ({data}) => {
    const {id, img, prev, next} = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-image slider-image w-full'>
                <img alt='' src={img} className="w-full h-full rounded-xl object-inherit" />
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 xl:left-56 lg:left-8 top-1/3 md:pl-5">
                <h1 className='md:text-6xl text-3xl text-white font-bold'>
                    Get Your Dream Laptop from Us
                </h1>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 md:w-2/5 lg:left-64 xl:left-96 top-1/2 md:mt-20 lg:mt-0 mt-20 md:pl-5">
                <p className='text-white text-xl'>
                    We sell authentic products. Try to purchase products from blue badge owners to avoid any risk.
                </p>
            </div>
            <div className="hidden mt-16 md:mt-40 absolute md:flex justify-center transform -translate-y-1/2 md:w-2/5 lg:left-64 xl:left-96 lg:top-60 md:top-80">
            <Link to='/categories'><button className="btn bg-blue-500 border-0">Categories</button></Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;