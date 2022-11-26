import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleProductSubmit = data => {
        const description = data.description;
        console.log(description);
    }

    return (
        <div className='mt-14 lg:ml-14'>
            <h2 className='text-center text-2xl font-semibold'>Add Your Product Description</h2>
            <div className='flex justify-center mt-5 mb-8'>
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
                                <span className="label-text">Select Your Account Type</span>
                            </label>
                            <select className='border rounded py-2' {...register("accountType")}>
                                <option value="user" selected>User</option>
                                <option value="seller">Seller</option>
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
                                <span className="label-text">Used Duration</span>
                            </label>
                            <input className="input input-bordered w-full" type='text'
                                {...register('usedTime', { required: "Must put your asking price here" })}
                            />
                            {errors.usedTime && <p className='text-red-600'>{errors.usedTime?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="border rounded w-full h-20" type='text'
                                {...register('description', { required: "Must put your asking price here" })}
                            />
                            {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                        </div>

                        <div><input className='btn bg-blue-700 mt-3' type="submit" value='Submit' /></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;