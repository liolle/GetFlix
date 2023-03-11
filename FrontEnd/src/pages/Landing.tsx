import Faq from '../Components/FAQ/Faq'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import sectionImage from '../images/sectionImage.png'


import Mosaic from "../Components/Gallery/Mosaic"


const LandingPage = () => {

  const backgroundImageStyle = {
    backgroundImage: `url("${sectionImage}")`,
    backgroundSize: 'cover',
  };

  return (

    <div className=' flex flex-col '>


    <section className=" flex-[0_1_25%] text-white gap-4" style={backgroundImageStyle}>
      <div className="bg-gradient-to-r from-black px-8 py-16 max-w-md">
        <div className="logo"></div>
        <h1 className="text-5xl text-slate-400 hover:text-sky-400 font-bold mb-8">Visualize</h1>
        <h2 className="text-lg mb-8 font-bold">More than a film, an Experience!</h2>
        
        <div>
          <button className="bg-gradient-to-r from-sky-400 to-sky-900 text-white py-1 px-6 text-lg rounded-md mb-8">
          <Link to="/Login">Login</Link></button>
        </div>

        <div>
          <button className="bg-gradient-to-r from-sky-400 to-sky-900 text-white py-1 px-6 text-lg rounded-md mb-8">
          <Link to ="/Inscription">Register</Link></button>
        </div>

        <div>
          <p>"Unlock unlimited access to your favorite movies and TV shows for just €7 a month or €60 a year! Subscribe now and never miss a moment of the action."</p>
        </div>
      </div>
    </section>
   
   <section className='  flex-[0_1_50%] bg-black'>
    <div className=' flex justify-center px-8 py-10 zIndex: 100 text-white text-2xl font-bold mb-4'>
        <h1>Our diverse and exclusive selection of movies!"</h1>
    </div>
    <Mosaic />
   </section>
        
    <section className=" flex-[0_1_25%] overflow-hidden text-white text-xl font-bold bg-black ">
      
    
      <Faq/>
      <Footer/>
    </section> 
  </div>
    

  )
}


export default LandingPage