import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductSummaryCard from '../../ProductSummaryCard/ProductSummaryCard';
import BookingModal from '../BookingModal/BookingModal';

const CategoryProducts = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);

    return (
        <div className='mt-10'>
            <h2 className='text-3xl text-center font-semibold underline underline-offset-2 italic'>Total Products: {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 my-10 lg:w-4/5 mx-auto'>
                {
                    products.map(product => <ProductSummaryCard key={product._id} product={product} setProduct={setProduct}></ProductSummaryCard>)
                }
            </div>
            {
                product &&
                <BookingModal product={product} setProduct={setProduct}>
                </BookingModal>
            }
        </div>
    );
};

export default CategoryProducts;