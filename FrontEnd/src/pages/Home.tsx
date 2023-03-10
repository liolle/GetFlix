import React from 'react'
import styled from 'styled-components'
import ReactCardSlider from '../Components/ReactCardSlider/ReactCardSlider'

import CarouselComponent from '../Components/ReactCarouselSlider/ReactCarouselSlider'



const Home: React.FC = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-black">
        <div> 
          <CarouselComponent />
        </div>
      </section>
      <section>
        <ReactCardSlider />
      </section>
    </>
  )
}

export default Home

