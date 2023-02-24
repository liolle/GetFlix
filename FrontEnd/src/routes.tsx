import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'
import Categories from './pages/Catégories'
import Films from './pages/Preview'
import Parametres from './pages/Watch'
import LandingPage from './pages/Landing'
import Inscription from "./pages/Inscription"
import Login from "./pages/Login"
import Payement from "./pages/Payement"
import Footer from "./Components/Footer/Footer"
import ReactCarouselSlider from "./Components/ReactCarouselSlider/ReactCarouselSlider"
import MovieCarousel from './Components/MovieCarousel/MovieCarousel'
import ReactCardSlider from './Components/ReactCardSlider/ReactCardSlider'
import MoviePage from './Components/MoviePage/MoviePage'
import Watch from './pages/Watch';
import Preview from './pages/Preview';
import ProfilePage from './Components/ProfilePage/ProfilePage';



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
    <Route path='/Preview' element={<Preview />} />
    <Route path='/Watch' element={<Watch />} />
   <Route path='/ReactCarouselSlider' element={< ReactCarouselSlider />}/>
   <Route path='/MovieCarousel' element={< MovieCarousel />}/>  
    <Route path='/ReactCardSlider' element={<ReactCardSlider />} />
    <Route path='/MoviePage' element={<MoviePage />} />
    
  </Routes>;
}
