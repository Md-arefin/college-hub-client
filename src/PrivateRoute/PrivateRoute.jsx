import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import arrow from '../assets/arrow-circle-2.png'
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
console.log(user,"private");
    if(loading){
        return <div className='my-16 flex flex-col md:flex-row items-center justify-center gap-5'>
        <img src={arrow} className='animate-spin w-10 ' />
        <p className='text-2xl'>Loading...</p>
    </div>
    }
    
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;