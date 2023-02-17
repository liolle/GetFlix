import React, { useState } from 'react'
import {FaIdBadge} from 'react-icons/fa'
import paypal from "../images/paypal.jpg"


function Payement (){

    const [cardHolder, setCardholder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [dateM, setDateM] = useState('')
    const [dateY, setDateY] = useState('')
    const [crypto, setCrypto] = useState('')

    const [formError, setFormError] = useState('')


    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!cardHolder || !cardNumber || !dateM || !dateY || !crypto) {
          setFormError('Please fill in all fields.')
        }

    }

return (

<div className = "min-h-screen py-40 bg-gradient-to-r from-sky-400 to-indigo-900">
    <div className = "container mx-auto">
        <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-slate-300 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(https://swsca-production.s3.amazonaws.com/ckeditor_assets/2020/03/19/dmoy01.jpg)` }}>
            </div>

           <div className = "w-full lg:w-1/2 py-10 px-12">
            <h2 className = "text-3xl mb-4">Payement</h2>

            <p className="mb-4 w-48"></p>
                
            <form action="" onSubmit={handleSubmit} >
                
                <div className="mt-5">
                    <label className="" htmlFor="name">Cardholder</label>
                    <input type="email" placeholder="Cardholder" name="Cardholder"  className="border border-gray-400 py-1 px-2 w-full" />
                    
                </div>
                <div className="mt-5 pb-5">
                    <label htmlFor="card">Card number</label>
                    <input type="password" placeholder="Card number" name="CardNumber" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <label htmlFor="card">Expiration Date</label>
                <div className= "grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Mounth" name="firstName"  className="border border-gray-400 py-1 px-2" />
                    <input type="text" placeholder="Year" name="SurName"  className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                    <label htmlFor="cryptogram">Visual cryptogram</label>
                    <input type="password" placeholder="Visual cryptogram" name="ConfPassword" className="border border-gray-400 py-1 px-2 w-full" />
                    {formError && <p>{formError}</p>}
                </div>
                
                <div className="mt-5">
                    <button type="submit" className="w-full bg-purple-500 py-3 text-center text-white">Pay Now</button>
                </div>
                <div className="pt-5">
                    <img src={paypal} />
                </div>
            </form>
            
          </div>
        </div>
      </div>    
    </div>

)

}

export default Payement;