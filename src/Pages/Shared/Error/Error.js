import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/images/error.png'
import { AuthContext } from '../../../contexts/AuthProvider';

const Error = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='flex justify-center items-center'>
                {
                    error &&
                        <div className='text-center'>
                        <div className='flex justify-center'>
                            <img src={errorImg} className='w-4/5' alt="" />
                        </div>
                        <h1 className="text-2xl text-warning">Something is wrong</h1>
                        {error.status && <p className='text-red-500 text-3xl font-semibold'>{error.status} : <span className='text-warning'>{error.statusText}</span></p>}
                        <h2 className="text-2xl text-success mt-7">Please and Log back in</h2>
                        <button onClick={handleLogOut} className='btn btn-success rounded'>Go Home</button>
                    </div>
                }
        </div>
    );
};

export default Error;