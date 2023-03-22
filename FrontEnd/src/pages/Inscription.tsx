import {Link, useNavigate} from 'react-router-dom'
// import backgroundImage from './OIP.jpg'

import { useState } from 'react'

const checkInput = (email:string,pwd:string,confPwd:string):{
  status:string, 
  emailErr:string,
  pwdErr:string,
  confPwdErr:string}=> {
   const retObj = {
    status:"OK", 
    emailErr: "",
    pwdErr:"",
    confPwdErr:""
  }
  if (email.length <=0 || pwd.length <=0){
    retObj.status = "Failed"
    retObj.emailErr = !email ? "email missing" : ""
    retObj.pwdErr = !pwd ? "pwd missing" : ""
  }
  else if (pwd != confPwd){
    retObj.status = "Failed"
    retObj.pwdErr = "pwd not matching" 
    retObj.confPwdErr = "pwd not matching" 
  }
  return retObj
}


function Inscription(){
  
    
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfPassword, setConfPassword] = useState('')
    const [checkBoxChecked, setCheckBoxChecked] = useState(false);
    const [emailErr, setEmailErr] = useState('')
    const [pwdErr, setPwdErr] = useState('')
    const [confPwdErr, setConfPwdErr] = useState('')
    const navigate = useNavigate();

    const handleSubmit = () => {
        
      setEmailErr('')
      setPwdErr('')
      setConfPwdErr('')

      let errObj = checkInput(Email,Password,ConfPassword)
      if (errObj.status != "OK"){
        setEmailErr(errObj.emailErr)
        setPwdErr(errObj.pwdErr)
        setConfPwdErr(errObj.confPwdErr)
      }
      else {
        if (!checkBoxChecked) return

        // Check with server

        (async ()=>{
                
                  const url = "https://getflix-production-8eb4.up.railway.app/register"
                  const localURL = "http://localhost:3535/register"

                  let option = {
                    method: 'POST',
                    headers: {
                      'accept': 'application/json',
                      'Content-Type': 'application/json',
                      
                    },
                    
                    body: JSON.stringify({
                      email: Email,
                      pwd: Password
                    }),
                    
                  }
                  
                  try {
                    let res = await fetch(url, option)
                    let data = await res.json()
                    console.log(data)
                    navigate("/login")
                  } catch (error) {
                    console.log(error)
                  }

        })();

      }
      
    }

    // const handlePasswordChange = (e:any) => {
    //     setPassword(e.target.value)
    //     if (ConfPassword && e.target.value !== ConfPassword) {
    //       setPasswordError('The passwords do not match.')
    //     } else {
    //       setPasswordError('')
    //     }
    //   }
    
    //   const handleConfPasswordChange = (e:any) => {
    //     setConfPassword(e.target.value)
    //     if (e.target.value !== Password) {
    //       setPasswordError('The passwords do not match. ')
    //     } else {
    //       setPasswordError('')
    //     }
    //   }

      
    return (

<div className = "min-h-screen py-40 bg-black">
    <div className = "container mx-auto">
        <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-slate-300 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(https://swsca-production.s3.amazonaws.com/ckeditor_assets/2020/03/19/dmoy01.jpg)` }}>
            </div>

            <div className = "w-full lg:w-1/2 py-10 px-12">
              <h2 className = "text-3xl mb-4">Register</h2>
              <p className="mb-4 w-48">Create your account.</p>
                
              <div className="mt-5">
                  <input type="email" placeholder="Email" name="Email" onChange={e => setEmail(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                  <span className=' text-red-600 font-bold'> {emailErr} </span>
              </div>

              <div className="mt-5">
                  <input type="password" placeholder="Password" name="Password" onChange={e => setPassword(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                  <span className=' text-red-600 font-bold'> {pwdErr} </span>
              </div>

              <div className="mt-5">
                  <input type="password" placeholder="Confirm Password" name="ConfPassword" onChange={e => setConfPassword(e.target.value)} className="border border-gray-400 py-1 px-2 w-full" />
                  <span className=' text-red-600 font-bold'> {confPwdErr} </span>
              </div>

              <div className="mt-5 flex flex-col">
                  <div className=' '>
                    <input type="checkbox" name="checkbox" 
                    onChange={e=>setCheckBoxChecked(e.target.checked)} 
                    className="border self-start border-gray-400" />
                    <span> I accept the 
                      <a href="#" 
                      className="font-semibold"> 
                      Terms of Use</a> & 
                      <a href="#" className=" font-semibold">
                        Privacy Policy</a>
                    </span>
                  </div>
                  <span className=' text-red-600 h-fit '> {checkBoxChecked? "":"*"} </span>
              </div>

              <div className="mt-5 ">
                 <div className=" flex flex-col gap-2">
                  <button type="button" 
                  className="w-full bg-gradient-to-r 
                  from-sky-400 to-sky-900 py-3 text-center 
                  text-white font-bold rounded-lg"
                  onClick={()=>handleSubmit()}
                  >Register</button>

                <span> Already Registered ? <Link className=' font-semibold' to="/login">Login</Link></span>

                 </div>
              </div>
            
          </div>
        </div>
      </div>    
    </div>
           
    )

}

export default Inscription;