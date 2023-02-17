// import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Inscription from "./Components/Inscription/Inscription"
import Login from "./Components/Login/Login"
import Payement from "./Components/Payement/Payement"
import Footer from "./Components/Footer/Footer"

// import './App.css'


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Inscription />} />  
        <Route path='/Login' element={<Login />} />
        <Route path='/Payement' element={<Payement />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes> 
    </div>  
  );
  
}

export default App;
