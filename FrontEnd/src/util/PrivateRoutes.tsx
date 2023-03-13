import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const isAuth = ()=>{
    //TODO check auth somehow 
    return false 
}

const PrivateRoutes = () => {

    const [auth,setAuth] = useState(false)

    useEffect(()=>{
        console.log("Rerender")
    })

    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes