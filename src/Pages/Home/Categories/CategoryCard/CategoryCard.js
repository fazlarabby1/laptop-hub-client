import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    return (
        <div>
            <Link to={`/category/${category._id}`} className="card border bg-base-100 shadow-xl">
                <figure>
                    <img src={category.img} alt="Shoes" className="rounded-xl md:h-[200px] h-44" />
                </figure>
            </Link>
        </div>
    );
};

export default CategoryCard;

// onClick={() => setBrand(category.name)}