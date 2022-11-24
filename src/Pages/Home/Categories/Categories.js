import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [brand, setBrand] = useState('');

    const handleBrandName = (name) =>{
        setBrand(name);
    }

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mb-20'>
            <h2 className='text-center text-4xl font-bold text-blue-600'>Welcome to Laptop Resale</h2>
            <p className='text-center text-3xl font-semibold mt-3 text-warning'>Here are the categories of <br /> available used Laptop</p>
            <div className='xl:w-3/4 mx-auto mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mx-auto'>
                    {
                        categories.map(category =>
                            <div onClick={() => handleBrandName(category.name)} key={category.id}>
                                <Link className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={category.img} alt="Shoes" className="rounded-xl md:h-[200px] h-44" />
                                    </figure>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;