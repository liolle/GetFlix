import React from 'react'
import { useState, useEffect } from 'react';

type Movie = {
    image:string,
    title:string,
    description: string
}
const addMovieInfo = async (setI:React.Dispatch<React.SetStateAction<string[]>>,
    setT:React.Dispatch<React.SetStateAction<string[]>>,
    setD:React.Dispatch<React.SetStateAction<string[]>>
    ,type:string) =>{
    let URL = `https://getflix-production-8eb4.up.railway.app/api/movies/random?n=${4}`
    let URL2 = `https://getflix-production-8eb4.up.railway.app/api/movies/select?types=${type}`
    
    try {
        
        let response = await fetch(URL)
        let data = await response.json()
        if (data){
            let img_buf:string[] = []
            let title_buf:string[] = []
            let desc_buf:string[] = []
            data.forEach((element:any,idx:number) => {
                if (idx >=5) return

                img_buf.push(element['image'])
                title_buf.push(element['title'])
                desc_buf.push(element['description'])
            });

            
            setI(img_buf)
            setT(title_buf)
            setD(desc_buf)
        } 

    } catch (error) {
        
    }
}




const setI = (idx:number,setIdx:React.Dispatch<React.SetStateAction<number>>,len:number)=>{
    setIdx((idx+1)%len)
    setI(idx,setIdx,len)
    
} 

type Props = {
    n: number;
    timeoutRange: [number,number]
    type: string
};



const SlideImgDivTitle = ({n,timeoutRange,type}:Props)=>{

    let [m_img, setI] =  useState<string[]>([])
    let [m_title, setT] =  useState<string[]>([])
    let [m_desc, setD] =  useState<string[]>([])
    let [idx,setIdx] = useState<number>(0)

    let min = Math.min(timeoutRange[0],timeoutRange[1])
    let max = Math.max(timeoutRange[0],timeoutRange[1])

    
    useEffect(() => {
       addMovieInfo(setI,setT,setD,type)
    }, []);

    
    useEffect(() => {
        setTimeout(() => {
            setIdx((idx+1)%n)
            
        }, Math.floor(Math.random()*max) + min);
      }, [idx]);

    //Math.floor(Math.random()*max) + min
    return (
        
            <img className="block object-cover object-center w-full h-full rounded-lg" src={m_img[idx]} alt=''></img>
        // <div className=' w-full h-full  relative '>
            
        //     {/* <span className=' text-black font-bold text-2xl absolute '>{m_title[idx]}</span> */}
        // </div>
        
    )
    
}

export default SlideImgDivTitle;