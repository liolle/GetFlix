
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";


import Sidebar from './Components/Sidebar/Sidebar'
import Team from './pages/Profile';
import Tasks from './pages/Catégories';
import Chats from './pages/Films';
import Analytics from './pages/Paramètres';
import { newFunction } from './newFunction';



const App: React.FunctionComponent = () => {
  return (
  
    
    <>
     
      <Router>
      
         <Sidebar />
          
        {newFunction()}
        
      </Router> 
     
    </>
  )
}

export default App


