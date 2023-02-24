// import React, { Component } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./ReactCardSlider.css"


  function ReactCardSlider (){

  const [action, setAction] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [animatedMovies, setAnimatedMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  

  const [imageSrc, setImageSrc] = React.useState("");
  const [imageDescription, setImageDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
    
      useEffect(() => {
        // Fetch the list of action movies and set it in the state
        
          fetch("https://getflix-production-8eb4.up.railway.app/api/movies/select?types=action&composition=AND&keyword=action")
          .then((response) => response.json())
          .then((data) => {
            console.log("Request");
              setAction(data);
  
            const randomIndex = Math.floor(Math.random() * data.length);
            const movie = data[randomIndex];
            setImageSrc(movie.image);
            setImageDescription(movie.description);
            setTitle(movie.title);

          })
          .catch((error) => console.log(error));
          
          fetch("https://getflix-production-8eb4.up.railway.app/api/movies/select?types=adventure&composition=AND&keyword=adventure")
          .then((response) => response.json())
          .then((data) => {
              setAdventureMovies(data);
          })
          .catch((error) => console.log(error));


          fetch("https://getflix-production-8eb4.up.railway.app/api/movies/select?types=thriller&composition=AND&keyword=thriller")
          .then((response) => response.json())
          .then((data) => {
              setThrillerMovies(data);
          })
          .catch((error) => console.log(error));



          fetch("https://getflix-production-8eb4.up.railway.app/api/movies/select?types=animation&composition=AND")
          .then((response) => response.json())
          .then((data) => {
              setAnimatedMovies(data);
          })
          .catch((error) => console.log(error));


          fetch("https://getflix-production-8eb4.up.railway.app/api/movies/select?types=horror&composition=AND&keyword=horror")
          .then((response) => response.json())
          .then((data) => {
              setHorrorMovies(data);
          })
          .catch((error) => console.log(error));
      }, []);



  //const token =useParams() 
    const PrevArrow = (props:any) => {
      const { className, onClick } = props;
      return (
        <button
          className={`${className}  bg-black rounded-full text-red p-4 focus:outline-none left-0 top-1/2 transform -translate-y-1/2 z-10`}
          onClick={onClick}
        >
          <FaChevronLeft size={50} />
        </button>
      );
    };

    const NextArrow = (props:any) => {
      const { className, onClick } = props;
      return (
        <button
          className={`${className} rounded-full text-red p-10 focus:outline-none right-0 top-1/2 transform -translate-y-1/2`}
          onClick={onClick}
        >
          <FaChevronRight size={50} />
        </button>
      );
    };


    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      

      <div className = "pb-8 bg-black">
      <div className="card">
        <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Action movies</span>
        <Slider {...settings}>
          {action.map((movie, index) => (
            <div key={index} className="px-2 slider-card">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="">
                  <img className="h-full object-cover transition-transform duration-500 group-hover:scale-110" src={movie.image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-2xl font-bold text-white">{movie.title}</h1>
                  <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{movie.description}</p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card">
        <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Adventure movies</span>
        <Slider {...settings}>
          {adventureMovies.map((movie, index) => (
            <div key={index} className="px-2 slider-card">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="">
                  <img className="h-full object-cover transition-transform duration-500 group-hover:scale-110" src={movie.image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-2xl font-bold text-white">{movie.title}</h1>
                  <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{movie.description}</p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card">
        <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Thriller movies</span>
        <Slider {...settings}>
          {thrillerMovies.map((movie, index) => (
            <div key={index} className="px-2 slider-card">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="">
                  <img className="h-full object-cover transition-transform duration-500 group-hover:scale-110" src={movie.image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-2xl font-bold text-white">{movie.title}</h1>
                  <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{movie.description}</p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card">
        <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Animated movies</span>
        <Slider {...settings}>
          {animatedMovies.map((movie, index) => (
            <div key={index} className="px-2 slider-card">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="">
                  <img className="h-full object-cover transition-transform duration-500 group-hover:scale-110" src={movie.image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-2xl font-bold text-white">{movie.title}</h1>
                  <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{movie.description}</p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card">
        <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Animated movies</span>
        <Slider {...settings}>
          {horrorMovies.map((movie, index) => (
            <div key={index} className="px-2 slider-card">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="">
                  <img className="h-full object-cover transition-transform duration-500 group-hover:scale-110" src={movie.image} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-2xl font-bold text-white">{movie.title}</h1>
                  <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{movie.description}</p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    );
    }

    export default ReactCardSlider;

        {/* <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Action movies</span>
        <Slider {...settings}>
        {[5,6,7,8]. map((item,index) => {

            const [imageSrc, setImageSrc] = React.useState("");
            const [imageDescription, setImageDescription] = React.useState("");

            React.useEffect(() => {
              fetch("https://getflix-production-8eb4.up.railway.app/api/movies/select?types=action&composition=AND&keyword=action")
                .then((response) => response.json())
                .then((data) => {
                  console.log("Request")
                  const randomIndex = Math.floor(Math.random() * data.length);
                  setImageSrc(data[randomIndex].image);
                  setImageDescription(data[randomIndex].description);
                })
                .catch((error) => console.log(error));
            }, []);

          return (
            <div key = {index} className="px-2 slider-card">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                <div className="">
                  <img className="h-full object-cover transition-transform duration-500 group-hover:scale-110" src={imageSrc} alt="" />
                </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl font-bold text-white"></h1>
                  <p className="mb-3 text-sm0 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{imageDescription}</p>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
                </div>
              </div>
            </div>
            
          );
        })}
        </Slider> */}
      
        



   
