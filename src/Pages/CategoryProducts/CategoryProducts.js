import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductSummaryCard from '../../ProductSummaryCard/ProductSummaryCard';

const CategoryProducts = () => {
    const products = useLoaderData();

    return (
        <div className='mt-10'>
            <h2 className='text-3xl text-center font-semibold underline underline-offset-2 italic'>Total Products: {products.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 my-10 lg:w-4/5 mx-auto'>
                {
                    products.map(product => <ProductSummaryCard key={product._id} product={product}></ProductSummaryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;