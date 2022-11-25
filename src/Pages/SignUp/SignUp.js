import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [signupError, setSignupError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUp = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;

        setSignupError(null);
        createUser(email, password)
            .then(result => {
                console.log(result);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        toast.success('User Created Successfully');
                    })
                    .catch(err=> console.log(err))
            })
            .catch(error => setSignupError(error))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>

            <div className='w-96 p-7 border shadow-lg rounded-lg'>
                <h2 className='text-3xl text-center'>Please Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='text'
                            {
                            ...register('name', { required: " Your name is required" })
                            }
                        />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

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
                    {error?.message && <p className='text-red-600'>{error?.message}</p>}

                    {signupError && <p className='text-red-600'>{signupError?.message}</p>}
                    <input className='btn bg-blue-700 w-full mt-3' type="submit" value='Sign Up' />
                </form>

                <p className='mt-4'>Already have an account? <Link to='/login' className='text-primary underline underline-offset-2'>Please Login</Link></p>
                <div className="divider"></div>
                <p className='text-center -mt-5 font-semibold text-green-500'>Social Log In</p>
                <button className='btn btn-outline mt-4 w-full text-black'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;