import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const date = new Date().toLocaleDateString("de-DE");
    const imageHostKey = process.env.REACT_APP_imagebb_key;

    if(loading){
        return <Loading></Loading>
    }

    const laptopBrands = [
        { id: 1, name: "Dell" },
        { id: 2, name: "HP" },
        { id: 3, name: "Asus" }
    ];
    let categoryId = '';

    const handleProductSubmit = data => {
        const productName = data.productName;
        const price = data.price;
        const originalPrice = data.originalPrice;
        const location = data.location;
        const usedTime = data.usedTime;
        const phone = data.phone;
        const postedTime = date;
        const description = data.description;
        const brand = data.brand;
        const productCondition = data.productCondition;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const sellerName = user.displayName;
        const sellerEmail = user.email;

        if(brand === 'Dell'){
            categoryId = '637fa71b345d495b7701f0ea';
        }
        else if(brand === 'HP'){
            categoryId = '637fa71b345d495b7701f0eb';
        }
        else{
            categoryId = '637fa71b345d495b7701f0ec';
        }
        setLoading(true);
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                const product = {
                    categoryId: categoryId,
                    brand,
                    productName,
                    price,
                    originalPrice,
                    location,
                    usedTime,
                    phone,
                    image: data.data.url,
                    description,
                    sellerName,
                    sellerEmail,
                    postedTime,
                    productCondition
                }

                // saving the added product data in DataBase
                fetch(`${process.env.REACT_APP_API_URL}/products`,{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result => {
                    toast.success('Product added successfully');
                    setLoading(false);
                    navigate('/dashboard/myproducts')
                })
                .catch(err => console.error(err))
            }
        })
    }

    return (
        <div className='mt-7 ml-10 lg:ml-14'>
            <h2 className='text-2xl font-semibold'>Add Your Product Description</h2>
            <div className='w-3/4'>
                <form className='grid md:grid-cols-2 gap-x-5' onSubmit={handleSubmit(handleProductSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input className="input input-bordered" type='text'
                            {
                            ...register('productName', { required: " Product name is required" })
                            }
                        />
                        {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input className="input input-bordered w-full" type='text'
                            {...register('originalPrice', { required: "Must put the original product price here" })}
                        />
                        {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Asking Price</span>
                        </label>
                        <input className="input input-bordered w-full" type='text'
                            {...register('price', { required: "Must put your asking price here" })}
                        />
                        {errors.price && <p className='text-red-600'>{errors.price?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Laptop Brand</span>
                        </label>
                        <select id='brand-id' className='border-2 rounded py-2 px-2' {...register('brand', { required: true })}>
                            {
                                laptopBrands.map(brand => <option key={brand.id} value={brand.name}>{brand.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Product Condition</span>
                        </label>
                        <select className='border rounded py-2' {...register("productCondition")}>
                            <option value="good" selected>Good</option>
                            <option value="fair">Fair</option>
                            <option value="excellent">Excellent</option>
                        </select>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input className="input input-bordered w-full" type='text'
                            {
                            ...register('location', { required: " Product location is required" })
                            }
                        />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input className="input input-bordered w-full" type='text'
                            {...register('phone', { required: "Must put your asking price here" })}
                        />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Purchase Year</span>
                        </label>
                        <input className="input input-bordered w-full" type='text'
                            {...register('usedTime', { required: "Must put your asking price here" })}
                        />
                        {errors.usedTime && <p className='text-red-600'>{errors.usedTime?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text dark:text-white">Photo</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs dark:text-slate-900" type='file'
                            {
                            ...register('image', { required: " Your photo is required" })
                            }
                        />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea placeholder='Write about the product condition' className="border rounded w-full h-20 p-3" type='text'
                            {...register('description', { required: "Must put your asking price here" })}
                        />
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>
                    <div><input className='btn bg-blue-700 md:mt-3' type="submit" value='Submit' /></div>
                </form>
            </div>
        </div>
    );
};

export default AddAProduct;