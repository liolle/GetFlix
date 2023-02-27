import React, { Component } from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ReactCardSlider.css"

type Movie ={
  image: string;
  description: string
  title: string
}

type moviTypes = {
  Action: Movie[],
  Adventure: Movie[],
  Animation: Movie[],
  Comedy: Movie[],
  Crime: Movie[],
  Documentary: Movie[],
  Drama: Movie[],
  Family: Movie[],
  Fantasy: Movie[],
  History: Movie[],
  Horror: Movie[],
  Music: Movie[],
  Mystery: Movie[],
  Romance: Movie[],
  ScienceFiction: Movie[],
  TVMovie: Movie[],
  Thriller: Movie[],
  War: Movie[],
  Western: Movie[]
}

let testType = {
  Action: [],
  Adventure: [],
  Animation: [],
  Comedy: [],
  Crime: [],
  Documentary: [],
  Drama: [],
  Family: [],
  Fantasy: [],
  History: [],
  Horror: [],
  Music: [],
  Mystery: [],
  Romance: [],
  ScienceFiction: [],
  TVMovie: [],
  Thriller: [],
  War: [],
  Western: []
}

let movieTypesString = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western"
]




const  fetchOneType = async (type:string):Promise<Movie[]> =>{
  let URL = `https://getflix-production-8eb4.up.railway.app/api/movies/select?types=${type}`
  
  return new Promise<Movie[]>(async (resolve, reject) => {
    
    try {
      let response = await fetch(URL)
      let data = await response.json()
      
      if (data){
        let movieList:Movie[] = []
        data.forEach((element:any) => {
          let movie:Movie = {
            image: element['image'],
            description: element['description'],
            title: element['title']
          } 
          
          movieList.push(movie)
          resolve(movieList)
        });
      }
  
    } catch (error) {
      
      reject([])
    }
  })
  
}

const fetchMovies = async (setMovie:React.Dispatch<React.SetStateAction<moviTypes>>)=>{
  
  let movieObj:Object = {
    "Action": [],
    "Adventure": [],
    "Animation": [],
    "Comedy": [],
    "Crime": [],
    "Documentary": [],
    "Drama": [],
    "Family": [],
    "Fantasy": [],
    "History": [],
    "Horror": [],
    "Music": [],
    "Mystery": [],
    "Romance": [],
    "Science Fiction": [],
    "TV Movie": [],
    "Thriller": [],
    "War": [],
    "Western": []
  }
  
  movieTypesString.forEach(async (elem)=>{
    // fetch one type 
    try {
      let movieFromType = await fetchOneType(elem)

      console.log()
      
      
    } catch (error) {
      console.log("Fetch Error with type: "+elem)
    }
  })
  
  setMovie(movieObj as moviTypes)
  
}

function ReactCardSlider (){
  

    let [movie,setMovie] = useState<moviTypes>(testType)
    
    
    useEffect(()=>{
      fetchMovies(setMovie)
      
    },[])

    
    return (

      // <img src={movie.Action[0].image}/>
      <div>Hello</div>
      
     );
    }

    export default ReactCardSlider;
