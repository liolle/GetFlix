import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sidebar from './Components/Sidebar/Sidebar'
import {routes} from './routes'

import {  Routes, Route } from 'react-router-dom';

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
import ReactCarouselSlider from "./Components/ReactCarouselSlider/ReactCarouselSlider"
import MovieCarousel from './Components/MovieCarousel/MovieCarousel';
import ReactCardSlider from './Components/ReactCardSlider/ReactCardSlider';

const App = () => {
  return (

      <div className='App'>
        <Sidebar/> 
        <Routes>
          <Route path='/GetFlix' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Inscription' element={<Inscription />} /> 
          <Route path='/Login' element={<Login />} />
          <Route path='/Payement' element={<Payement />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Catégories' element={<Categories />} />
          <Route path='/Films' element={<Films />} />
          <Route path='/Paramètres' element={<Parametres />} />
          <Route path='/ReactCarouselSlider' element={< ReactCarouselSlider />}/>
          <Route path='/MovieCarousel' element={< MovieCarousel />}/>  
          <Route path='/ReactCardSlider' element={<ReactCardSlider />} />
        </Routes>
      </div>

    
    

  )
}

export default App

