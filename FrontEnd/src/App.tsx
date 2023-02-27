import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from './Components/Sidebar/Sidebar'
import {routes} from './routes'



const App: React.FunctionComponent = () => {
  return (
  
    <>
      

      <Sidebar/> 
          
        {routes()}
        
      
      
    </>
  )
}

export default App

