
import React from 'react'

import Faq from '../Components/FAQ/Faq'
import Footer from '../Components/Footer/Footer'
import sectionImage from '../images/sectionImage.png'
import myImage1 from '../images/myImage1.jpg'
import myImage2 from '../images/myImage2.jpg'
import myImage3 from '../images/myImage3.jpg'
import myImage4 from '../images/myImage4.jpg'
import myImage5 from '../images/myImage5.jpg'
import myImage6 from '../images/myImage6.jpg'



const LandingPage: React.FunctionComponent = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${sectionImage}")`,
    backgroundSize: 'cover',
  };

  return (
    <>
      <section className="text-white grid grid-cols-1 gap-4" style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black px-8 py-16 max-w-md">
          <div className="logo"></div>
          <h1 className="text-5xl text-slate-400 hover:text-sky-400 font-bold mb-8">Visualize</h1>
          <h2 className="text-lg mb-8 font-bold">More than a film, an Experience!</h2>
          
          <div>
            <button className="bg-gradient-to-r from-sky-400 to-sky-900 text-white py-1 px-6 text-lg rounded-md mb-8">
              Login
            </button>
          </div>
          <div>
            <button className="bg-gradient-to-r  from-sky-400 to-sky-900 text-white py-1 px-6 text-lg rounded-md mb-8">
              Subscribe
            </button>
          </div>
          <div>
          <p>"Unlock unlimited access to your favorite movies and TV shows for just €7 a month or €60 a year! Subscribe now and never miss a moment of the action."</p>
        </div>
        </div>
       
      </section>
      <section className="overflow-hidden text-white text-xl font-bold mb-8 bg-gradient-to-r from-black bg-slate-400 text-gray-700">
        <div className='px-8 py-10'>
          <h1>Our diverse and exclusive selection of movies!"</h1>
        </div>
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={myImage1}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={myImage2}
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={myImage3}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={myImage4}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={myImage5}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block object-cover object-center w-full h-full rounded-lg"
            src={myImage6}
          />
        </div>
      </div>
    </div>
  </div>
  <Faq/>
  <Footer/>
</section>


  


















</>
  )
}


export default LandingPage