import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [logInEmail, setLogInEmail] = useState('');
    const [token] = useToken(logInEmail)

    const handleLogIn = data => {
        const email = data.email;
        const password = data.password;

        logIn(email, password)
            .then(result => {
                setLogInEmail(email);
                toast.success('User Logged in Successfully');
            })
            .catch(err => setLoginError(err))
    }

    const handleGoogleLogIn = () => {
        setLoginError('');
        setLogInEmail('');
        googleSignIn()
            .then(result => {
                const user = result.user;
                setLogInEmail(user?.email);
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    accountType: "user"
                }
                saveUserToDB(userInfo);
            })
            .catch(err => setLoginError(err))
    }

    const saveUserToDB = userInfo => {
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('User Created Successfully');
                setLogInEmail(userInfo?.email);
            })
    }

    if (token) { navigate(from, { replace: true }) }

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
                <button onClick={handleGoogleLogIn} className='btn btn-outline mt-4 w-full text-black'>Continue With Google</button>
            </div>
        </div>
    );
};

export default LogIn;