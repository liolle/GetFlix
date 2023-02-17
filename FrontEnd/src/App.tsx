import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from './Components/Sidebar/Sidebar'
import {routes} from './routes'




const App: React.FunctionComponent = () => {
  return (
  
    <>
      <Router> 

      <Sidebar/> 
          
        {routes()}
        
      </Router> 
      
    </>
  )
}

export default App

