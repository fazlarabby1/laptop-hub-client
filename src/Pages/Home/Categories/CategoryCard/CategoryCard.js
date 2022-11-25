import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const CategoryCard = ({category}) => {
    const {setCategoryId} = useContext(AuthContext);
    return (
        <div onClick={()=> setCategoryId(category._id)}>
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