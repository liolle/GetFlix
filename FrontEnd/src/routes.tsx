import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Catégories'
import Films from './pages/Films'
import Parametres from './pages/Paramètres'
import LandingPage from './pages/Landing'
import Inscription from "./pages/Inscription"
import Login from "./pages/Login"
import Payement from "./pages/Payement"
import Footer from "./Components/Footer/Footer"
import ReactCardSlider from './Components/ReactCardSlider/ReactCardSlider';

export function routes() {
  return <Routes>

    <Route path='/' element={<LandingPage />} />
    <Route path='/home' element={<Home />} />
    <Route path='/Inscription' element={<Inscription />} /> 
    <Route path='/Login' element={<Login />} />
    <Route path='/Payement' element={<Payement />} />
    <Route path='/Footer' element={<Footer />} />
    <Route path='/Profile' element={<Profile />} />
    <Route path='/Catégories' element={<Categories />} />
    <Route path='/Films' element={<Films />} />
    <Route path='/Paramètres' element={<Parametres />} />
    <Route path='/ReactCardSlider' element={<ReactCardSlider />} />
    
  </Routes>;
}
