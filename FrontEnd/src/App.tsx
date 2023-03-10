import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Sidebar from './Components/Sidebar/Sidebar'
import {routes} from './routes'

const App = () => {
  return (
  
    <>
      

      <Sidebar/> 
          
        {routes()}
        
      
      
    </>
  )
}

export default App

