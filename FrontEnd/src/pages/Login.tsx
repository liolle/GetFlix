import { useState } from 'react'
import { useNavigate , Link } from 'react-router-dom';

const host =  "https://get-flix-back-end-liolle.vercel.app"
const checkInput = (email:string,pwd:string):{status:string, emailErr:string,pwdErr:string}=> {
   const retObj = {
    status:"OK", 
    emailErr: "",
    pwdErr:""
  }
  if (email.length <=0 || pwd.length <=0){
    retObj.status = "Failed"
    retObj.emailErr = !email ? "email missing" : ""
    retObj.pwdErr = !pwd ? "pwd missing" : ""
  }
  return retObj
}

function Login (){

        const [Email, setEmail] = useState('')
        const [Password, setPassword] = useState('')
        const [emailErr, setEmailErr] = useState('')
        const [pwdErr, setPwdErr] = useState('')
        const navigate = useNavigate();
    // const location = useLocation()

        const handleSubmit = () => {

            setEmailErr('')
            setPwdErr('')

            let errObj = checkInput(Email,Password)
            if (errObj.status != "OK"){
              setEmailErr(errObj.emailErr)
              setPwdErr(errObj.pwdErr)
            }
            else{
              (async ()=>{
                
                          const url = host+"/login/"
                
                          let option = {
                            method: 'POST',
                            headers: {
                              'accept': 'application/json',
                              'Content-Type': 'application/json',
                              
                            },
                            credentials: "include" as RequestCredentials,
                            body: JSON.stringify({
                              email: Email,
                              pwd: Password
                            }),
                            
                          }
                          
                          try {
                            let res = await fetch(url, option)
                            let data = await res.json()
                            console.log(data)
                            navigate("/home")
                          } catch (error) {
                            console.log(error)
                          }

              })();

            }
        }

    return (
        <div className = "min-h-screen py-40 bg-black">
          <div className = "container mx-auto">
            <div className = "flex flex-col md:flex-row lg:flex-row w-9/12 md:w-11/12 lg:w-8/12 bg-slate-400 rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className = "w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style ={{ backgroundImage: `url(https://swsca-production.s3.amazonaws.com/ckeditor_assets/2020/03/19/dmoy01.jpg)` }}>
                </div>
    
               <div className = "w-full lg:w-1/2 py-10 px-12 pb-5">
                <h2 className = "text-4xl mb-4 pb-5">Sign In</h2>
    
                <p className="mb-4 w-48"></p>
                
                  <div className= " grid mt-5">
                      <input type="email" placeholder="Email" name="Email" 
                      onChange={e => setEmail(e.target.value)} 
                      className="border border-gray-400 py-1 px-2 w-full" />
                      <span className=' text-red-600 font-bold'> {emailErr} </span>
                  </div>

                  <div className="mt-5">
                      <input type="password" placeholder="Password" 
                      name="Password" onChange={e => setPassword(e.target.value)} 
                      className= "border border-gray-400 py-1 px-2 w-full" />
                      <span className=' text-red-600 font-bold'> {pwdErr} </span>
                  </div>

                  <div className="mt-5">
                    <input type="checkbox" name="checkbox"  className="border border-gray-400" />
                    <span> To remember me </span>
                  </div>

                  <div className="mt-5 pb-5">
                      <button type="button" 
                      className="w-full bg-gradient-to-r 
                      from-sky-400 to-sky-900 py-3 text-center text-white"
                      
                      onClick={ ()=> handleSubmit() }>Login</button>
                  </div>
                  
                  <div>
                    <span> First time visit on Visualize ? <Link className=' font-semibold' to="/Inscription">Register</Link></span>
                  </div>
              </div>
            </div>
          </div>    
        </div>
    )
    }


// const Log = ()=>{
//   []
// }

export default Login; 