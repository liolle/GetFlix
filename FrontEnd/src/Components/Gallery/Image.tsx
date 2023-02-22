import React from 'react'
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const getMovieInfo = async (title:string,setLink:React.Dispatch<React.SetStateAction<string>>) =>{
    let URL = "https://getflix-production-8eb4.up.railway.app/api/movies/select?title="+title
    
    try {
        
        let response = await fetch(URL)
        let data = await response.json()
        console.log("---")
        if (data) setLink(data[0]['image']) 
        // setLink("")
        
    } catch (error) {
        setLink("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT764zmud8dIimZgJT_710NiVqOE1rw15nZfw&usqp=CAU")
    }
    
    
}

type Props = {
    title: string;
  };
  
  function ImageProps({ title }: Props) {
    let [imageLink, setLink] = useState("https://th.bing.com/th/id/OIP.PC3JvGZQsNdoDiVJnjs9jQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7");
    
    if( imageLink =="https://th.bing.com/th/id/OIP.PC3JvGZQsNdoDiVJnjs9jQHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7" ){
        console.log(title,imageLink)
        getMovieInfo(title, setLink);
    } 
    console.log("IN_COMPONENT: ",Date.now())
    return (
      <LazyLoadImage
        effect='opacity'
        className=" rounded-lg"
        src={imageLink} // use normal <img> attributes as props
        />
    );
  }
  
  export default ImageProps;