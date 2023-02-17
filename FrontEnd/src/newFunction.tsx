import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Categories from './pages/Catégories';
import Films from './pages/Films';
import Parametres from './pages/Paramètres';
import LandingPage from './pages/Landing';

export function newFunction() {
  return <Routes>
    <Route path='/' element={<LandingPage />} />



    <Route path='/home' element={<Home />} />

    <Route path='/Profile' element={<Profile />} />
    <Route path='/Catégories' element={<Categories />} />
    <Route path='/Films' element={<Films />} />
    <Route path='/Paramètres' element={<Parametres />} />

  </Routes>;
}
