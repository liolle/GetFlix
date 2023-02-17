import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'

import Sidebar from './Components/Sidebar/Sidebar'
import Team from './pages/Profile';
import Tasks from './pages/Catégories';
import Chats from './pages/Films';
import Analytics from './pages/Paramètres';
import Inscription from "./Components/Inscription/Inscription"
import Login from "./Components/Login/Login"
import Payement from "./Components/Payement/Payement"
import Footer from "./Components/Footer/Footer"

import { newFunction } from './newFunction';



const App: React.FunctionComponent = () => {
  return (
  
    
    <>
     

      <Router>
        
     <div className="App">
      <Routes>
        <Route path='/' element={<Inscription />} />  
        <Route path='/Login' element={<Login />} />
        <Route path='/Payement' element={<Payement />} />
        <Route path='/Footer' element={<Footer />} />


      </Routes> 
    </div>  
      
         <Sidebar />
          
        {newFunction()}
        
      </Router> 
     
    </>
  )
}

export default App

