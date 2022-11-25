import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import CategoryCard from './CategoryCard/CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    // const handleBrandName = (name) =>{
    //     setBrand(name);
    // }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className='mb-20'>
            <h2 className='text-center text-4xl font-bold text-blue-600'>Welcome to Laptop Resale</h2>
            <p className='text-center text-3xl font-semibold mt-3 text-warning'>Here are the categories of <br /> available used Laptop</p>
            {
                loading === true && <Loading></Loading>
            }
            <div className='xl:w-3/4 mx-auto mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-auto'>
                    {
                        categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;