import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchAuth = async () => {
      const authRouteLocal = "http://localhost:3535/login/auth";
      let option = {
        method: 'POST',
        credentials: 'include' as RequestCredentials
      }
      const res = await fetch(authRouteLocal, option);
      res.status === 200 ? setAuth(true) : setAuth(false);
    };

    setTimeout(()=>{

        fetchAuth();
    },2000)

  }, []);

  if (auth === null) {
    return <div>Loading...</div>;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />

};

export default PrivateRoute

