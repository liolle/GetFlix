import { Outlet, Navigate } from 'react-router-dom'

const isAuth = ()=>{
    //TODO check auth somehow 
    return false 
}

const PrivateRoutes = () => {
    return(
        isAuth() ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes