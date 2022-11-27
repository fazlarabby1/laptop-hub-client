import React from 'react';
import { Link } from 'react-router-dom';
import aboutUs from '../../../assets/images/About Us.png';

const AboutUs = () => {
    return (
        <div className='mb-10'>
            <div className="card lg:w-5/6 mx-auto lg:card-side bg-base-100 border shadow-xl">
                <figure><img className='lg:w-full lg:h-full md:h-[400px] md:w-1/2' src={aboutUs} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">About Us</h2>
                    <p className='text-xl font-semibold'>Welcome To Laptop Hub</p>
                    <p className='lg:-mt-18'>Here you can buy and sell used laptop at reasonable price. Join Us to know more about <b>Laptop HUB</b>.A laptop, laptop computer, or notebook computer is a small, portable personal computer with a screen and alphanumeric keyboard</p>
                    <div className="card-actions justify-end">
                        <Link to='/login' className="btn btn-primary">Join Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;