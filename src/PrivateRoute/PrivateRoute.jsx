import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa'
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
console.log(user,"private");
    if(loading){
        return <FaSpinner className='animate-spin mx-auto text-3xl text-red-600 my-96'/>
    }
    
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;