import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const isAuth = ()=>{
    //TODO check auth somehow 
    return false 
}

const PrivateRoutes = () => {

    const [auth,setAuth] = useState(false)

    useEffect( ()=>{
        console.log("Rerender")
        const authRoute = "https://getflix-production-8eb4.up.railway.app/login/auth";
        
        (async ()=>{

            let option = {
                method: 'POST',
            }

            let res = await fetch(authRoute,option)

            res.status == 200 ? setAuth(true) : setAuth(false)
            

        })();


    })

    return(
        // auth ? <Outlet/> : <Navigate to="/login"/>
        <Outlet/>
    )
}

export default PrivateRoutes