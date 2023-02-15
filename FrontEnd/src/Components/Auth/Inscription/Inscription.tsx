import React from 'react'


// import backgroundImage from './OIP.jpg'

function Inscription(){
    
    return (
<div>


<div className = "min-h-screen py-40 bg-gradient-to-r from-sky-400 to-indigo-900">
    <div className = "container mx-auto">
        <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(https://swsca-production.s3.amazonaws.com/ckeditor_assets/2020/03/19/dmoy01.jpg)` }}>
            </div>

           <div className = "w-full lg:w-1/2 py-10 px-12">
            <h2 className = "text-3xl mb-4">Register</h2>

            <p className="mb-4 w-48">Create your account.</p>
                
            <form action="">
                <div className= " grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Firstname" name="Firstname" className="border border-gray-400 py-1 px-2" />
                    <input type="text" placeholder="Surname" name="Surname" className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                    <input type="email" placeholder="Email" name="Email"  className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Password" name="Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Confirm Password" name="ConfPassword" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                   <input type="checkbox" className="border border-gray-400" />
                    <span> I accept the <a href="#" className="text-purple-500 font-semibold"> Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a></span>
                </div>
                <div className="mt-5">
                    <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                </div>
            </form>
            
          </div>
        </div>
      </div>    
    </div>
  </div>
           
    )

}

export default Inscription;