import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'
import LandingPage from './pages/Landing'
import Inscription from "./pages/Inscription"
import Login from "./pages/Login"
import Payement from "./pages/Payement"
import Watch from './pages/Watch'
import Preview from './pages/Preview'

import PrivateRoutes from './util/PrivateRoutes'
import LoginTransition from './util/LoginTransition'


export function routes() {
  return <Routes>

    <Route element={<PrivateRoutes />}>
      <Route path='/home' element={<Home />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/Preview' element={<Preview />} />
      <Route path='/Watch' element={<Watch />} />
    </Route>

    <Route element={<LoginTransition />}>
      <Route path='/Login' element={<Login />} />
    </Route>

    <Route path='/Payement' element={<Payement />} />
    <Route path='/Inscription' element={<Inscription />} />
    <Route path='/' element={<LandingPage />} />

  </Routes>;
}
