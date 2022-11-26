import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const product = useLoaderData();

    const { productName, price } = product;
    return (
        <div className='mt-14 lg:ml-14 ml-0'>
            <h1 className='text-2xl font-semibold mb-6'>Payment for {productName}</h1>
            <p className='text-xl'>Please pay <strong>{price}TK</strong></p>
            <div className='md:w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout product={product}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;