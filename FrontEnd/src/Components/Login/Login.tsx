import React, { useState } from 'react'

function Login (){

        const [Email, setEmail] = useState('')
        const [Password, setPassword] = useState('')

        const [formError, setFormError] = useState('')
       
    
        // const [isSubmitted, setIsSubmitted] = useState(false)
    
        const handleSubmit = (e: any) => {
            e.preventDefault()
            if (!Email || !Password) {
              setFormError('Please fill in all fields.')
            }else {
              setFormError('')
              console.log("Formulaire envoyé");
              // setIsSubmitted(true)
            }
          
          }

    return (
        <div className = "min-h-screen py-40 bg-gradient-to-r from-sky-400 to-indigo-900">
        <div className = "container mx-auto">
            <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-slate-300 rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(https://swsca-production.s3.amazonaws.com/ckeditor_assets/2020/03/19/dmoy01.jpg)` }}>
                </div>
    
               <div className = "w-full lg:w-1/2 py-10 px-12 pb-5">
                <h2 className = "text-4xl mb-4 pb-5">Sign In</h2>
    
                <p className="mb-4 w-48"></p>
                    
                <form action="" onSubmit={handleSubmit}>
                    <div className= " grid mt-5">
                        <input type="email" placeholder="Email" name="Email" onChange={e => setEmail(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                    <div className="mt-5">
                        <input type="password" placeholder="Password" name="Password" onChange={e => setPassword(e.target.value)} className= "border border-gray-400 py-1 px-2 w-full" />
                        {formError && <p>{formError}</p>}
                   <div className="mt-5">
                   <input type="checkbox" name="checkbox"  className="border border-gray-400" />
                   
                    <span> To remember me </span>
                    </div>
                    </div>
                    <div className="mt-5 pb-5">
                        <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Login</button>
                    </div>
                    <div>
                      <span> First time visit on Visualize ? <a href="/" className="text-purple-500 font-semibold">Sign up</a></span>
                    </div>
                </form>
                
              </div>
            </div>
          </div>    
        </div>
    )
    }

export default Login;