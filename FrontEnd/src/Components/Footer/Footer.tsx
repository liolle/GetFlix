import React from 'react'
import { FaTv, FaDesktop, FaMobileAlt, FaGamepad } from 'react-icons/fa'
import {FaFacebook, FaInstagram, FaTwitterSquare, FaGoogle, FaHome, FaEnvelope, FaPhoneAlt, FaPrint} from 'react-icons/fa'




const Footer: React.FunctionComponent = () => {



  return (
    <footer className=" py-3">

        
        <div className="flex justify-center pb-8 ml-2 overflow-hidden text-white text-xl font-bold mb-8">
                <span className="text-3xl font-bold text-white">Accessible on your favorite devices</span>
        </div>

        <div className="flex justify-center ml-3 pb-8 text-white">
          <ul className="flex justify-between">
            <li className="mr-4">
              <a href="#"><FaTv size={60} /></a>
            </li>
            <li className="mr-4 mx-9">
              <a href="#"><FaDesktop size={60} /></a>
            </li>
            <li className=" mr-4 mx-9">
              <a href="#"><FaMobileAlt size={60} /></a>
            </li>
            <li className="mr-4 mx-9">
              <a href="#"><FaGamepad size={60} /></a>
            </li>
        </ul>
    </div>
<div className='text-center text-md-start grid grid-cols-2 pt-5 text-white'>

            <div  className='mx-auto mb-4 md="3" lg="2" xl="2"'>
              <div className='font-bold text-3xl mb-4'>Useful links</div>

              <p><a href='#!' className='text-2xl'>Pricing</a></p>

              <p><a href='#!' className='text-2xl'>Settings</a></p>

              <p><a href='#!' className='text-2xl'>Orders</a></p>

              <p><a href='#!' className='text-2xl'>Help</a></p>


            </div>

            <div  className='mb-4 md="3" lg="2" xl="2"'>
              <div className='font-bold text-3xl mb-4'>Contact</div>

              <p className="flex items-center justify-center text-2xl">
                <a href="#"><FaHome size={25}/>BE, Brussel 1000</a></p> 

              <span className="flex items-center justify-center text-2xl">
                <a href="#"><FaEnvelope size={20}/>Vizualize@Mail</a></span>

              <span className="flex items-center justify-center text-2xl">
                <a href="#"><FaPhoneAlt size={20}/>+ 01 234 56 89</a></span>

              <span className="flex items-center justify-center text-2xl">
                <a href="#"><FaPrint size={20}/>+ 01 234 56 89</a></span>
            </div>
          </div>
<div className="flex justify-center pb-3 pt-8 ml-2 text-white">
                <span className="text-3xl font-bold text-white">Get connected with us on Social Media</span>
          </div>
          <div className="flex justify-center text-2xl pt-5 pb-5 text-white">
                <ul className="flex justify-between">
                <li className="mr-4">
               <a href="#"><FaFacebook size={30} /></a>
             </li>
             <li className="mr-4 mx-12">
               <a href="#"><FaInstagram size={30} /></a>
             </li>
             <li className="mr-4 mx-12">
               <a href="#"><FaTwitterSquare size={30} /></a>
             </li>
             <li className="mr-4 mx-12">
                <a href="#"><FaGoogle size={30} /></a>
             </li>
           </ul>
          </div>
    </footer>
  )
}
export default Footer
