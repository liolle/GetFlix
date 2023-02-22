import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import backgroundImage from './OIP.jpg'


function Inscription(){
  
    const [firstName, setFirstName] = useState('')
    const [surName, setSurName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfPassword, setConfPassword] = useState('')
    const [PasswordError, setPasswordError] = useState('')
    const [formError, setFormError] = useState('')
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);

    // const [isSubmitted, setIsSubmitted] = useState(false)


    const handleCheckBoxChange = (e:any) => {
            setCheckBoxChecked(e.target.checked);
          };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!firstName || !surName || !Email || !Password || !ConfPassword) {
          setFormError('Please fill in all fields.')
        } else if (!checkBoxChecked) {
          setFormError('Please accept the terms of use and privacy policy.')
        }else {
          setFormError('')
          console.log("Formulaire envoyé");
          // setIsSubmitted(true)
        }
      
      }

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value)
        if (ConfPassword && e.target.value !== ConfPassword) {
          setPasswordError('The passwords do not match.')
        } else {
          setPasswordError('')
        }
      }
    
      const handleConfPasswordChange = (e:any) => {
        setConfPassword(e.target.value)
        if (e.target.value !== Password) {
          setPasswordError('The passwords do not match. ')
        } else {
          setPasswordError('')
        }
      }

      
    return (

<div className = "min-h-screen py-40 bg-gradient-to-r from-sky-400 to-indigo-900">
    <div className = "container mx-auto">
        <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-slate-300 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(https://swsca-production.s3.amazonaws.com/ckeditor_assets/2020/03/19/dmoy01.jpg)` }}>
            </div>

           <div className = "w-full lg:w-1/2 py-10 px-12">
            <h2 className = "text-3xl mb-4">Register</h2>

            <p className="mb-4 w-48">Create your account.</p>
                
            <form action="" onSubmit={handleSubmit}>
                <div className= " grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Firstname" name="firstName" onChange={e => setFirstName(e.target.value)} className="border border-gray-400 py-1 px-2" />
                    <input type="text" placeholder="Surname" name="SurName" onChange={e => setSurName(e.target.value)} className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                    <input type="email" placeholder="Email" name="Email" onChange={e => setEmail(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Password" name="Password" value={Password} onChange={handlePasswordChange} className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                    <input type="password" placeholder="Confirm Password" name="ConfPassword" value={ConfPassword} onChange={handleConfPasswordChange} className="border border-gray-400 py-1 px-2 w-full" />
                    {PasswordError && <p>{PasswordError}</p>}
                    {formError && <p>{formError}</p>}
                </div>
                <div className="mt-5">
                   <input type="checkbox" name="checkbox" onChange={handleCheckBoxChange} className="border border-gray-400" />
                    <span> I accept the <a href="#" className="text-purple-500 font-semibold"> Terms of Use</a> & <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a></span>
                </div>
                <div className="mt-5">
                    <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white"><Link to="/Payement">Register Now</Link></button>
                </div>
            </form>
            
          </div>
        </div>
      </div>    
    </div>
           
    )

}

export default Inscription;