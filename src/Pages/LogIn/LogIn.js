import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const LogIn = () => {
    const {logIn} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState(null);

    const handleLogIn = data =>{
        const email = data.email;
        const password = data.password;

        logIn(email, password)
        .then(result =>{
            toast.success('User Logged in Successfully')
        })
        .catch(err=> setLoginError(err))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-7 border shadow-lg rounded-lg'>
                <h2 className='text-3xl text-center'>Please Sign Up</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='email'
                            {...register('email', { required: "Email is required" })}
                        />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='password'
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 8, message: 'Password muts be at least 8 characters long' }
                            })}
                        />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    {loginError && <p className='text-red-600'>{loginError?.message}</p>}
                    <input className='btn bg-blue-700 w-full mt-3' type="submit" value='Log In' />
                </form>

                <p className='mt-4'>Don't have an account? <Link to='/signup' className='text-primary underline underline-offset-2'>Please Sign Up</Link></p>
                <div className="divider"></div>
                <p className='text-center -mt-5 font-semibold text-green-500'>Social Log In</p>
                <button className='btn btn-outline mt-4 w-full text-black'>Continue With Google</button>
            </div>
        </div>
    );
};

export default LogIn;