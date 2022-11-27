import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useSellerVerify from '../../hooks/useSellerVerify';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
   const [isSeller, isLoading] = useSellerVerify(user?.email);
   const location = useLocation();

   if(isLoading || loading){
    return <Loading></Loading>
   }
   if(user && isSeller){
    return children;
   }
   return <Navigate to='/' state={{from: location}} replace/>
};

export default SellerRoute;