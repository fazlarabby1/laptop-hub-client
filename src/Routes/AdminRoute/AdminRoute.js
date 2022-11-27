import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdminVerify from '../../hooks/useAdminVerify';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdminVerify(user?.email);
    const location = useLocation();
    
    if(adminLoading || loading){
        return <Loading></Loading>
    }
    if(isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace/>
};

export default AdminRoute;