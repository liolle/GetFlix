import React from 'react'
import { useState, useEffect } from 'react';

import {  GoVerified } from 'react-icons/go';
const host =  "https://get-flix-back-end-liolle.vercel.app"
const getUserInfo = async (setUser:React.Dispatch<React.SetStateAction<User>>) =>{

    const url = host+"/users/one"
    const localURL = "https://get-flix-back-end-liolle.vercel.app/users/one/"

    let option = {
        method: 'POST',
        credentials: "include" as RequestCredentials,
    }

    try {
        
        let response = await fetch(url,option)
        let data = await response.json()
        if (data){
            console.log(data)

            setUser({
                email : data['email'],
                username : data['username'],
                status : data['status']
            })
            
        } 

    } catch (error) {
        
    }
    
}


type User = {
    email : string,
    username : string,
    status : number
}

const sendEmail = async (email:string)=>{
            
    const url = host+"/register/vf/"
    
    let option = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            email: email,
        })
    }

    try {
        
        let response = await fetch(url,option)
        let data = await response.json()
        if (data){
            console.log(data)
        } 

    } catch (error) {
        
    }

}


const ProfileSection = ()=>{

    let [imageLinks, setLinks] =  useState<string[]>([])
    let [idx,setIdx] = useState<number>(0)

    let [user, setUser] = useState<User>( {
        email : "Unknown",
        username : "Unknown",
        status : 0
    })

    
    useEffect(() => {
        getUserInfo(setUser)

    }, []);

    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIdx((idx+1)%n)
            
    //     }, Math.floor(Math.random()*max) + min);
    //   }, [idx]);

    //Math.floor(Math.random()*max) + min
    return (

            <div className=' flex h-full  w-full bg-neutral-800 '>
                <div className=' flex-[0_1_30%] max-w-[200px]
                flex justify-center items-center'>
                    <div className=' h-[80%] w-[80%] 
                    bg-neutral-500 rounded-full 
                    flex  justify-center items-center '>
                        <span className=' font-bold text-2xl  '>U</span>
                    </div>
                </div>
                <div className=' flex flex-[1_1_70%] p-3'>
                    <div className=' flex-1 py-3 px-8 flex flex-col gap-6'>
                        <span className='  text-3xl  '>
                            {user.username == "" ?"Username":user.username}</span>
                        <div className=' flex justify-between items-center text-xl '>
                            <div className='flex items-center gap-3'>
                                {user.status & 1 ?<GoVerified/>:"" } 
                                <span className='    '>{user.email}</span>
                            </div>
                            {user.status & 1 ?"": <span  className=' text-sm 
                            cursor-pointer underline decoration-white'
                            onClick={()=>sendEmail(user.email)}> 
                            VerifyEmail </span> } 
                        </div>
                    </div>
                </div>
            </div>
        
    )
    
}

export default ProfileSection;