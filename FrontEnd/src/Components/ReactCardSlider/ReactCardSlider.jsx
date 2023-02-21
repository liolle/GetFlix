import React, { Component } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ReactCardSlider.css"



export default class Responsive extends Component {
  render() {

    const PrevArrow = (props) => {
      const { className, onClick } = props;
      return (
        <button
          className={`${className} rounded-full text-red p-4 focus:outline-none left-0 top-1/2 transform -translate-y-1/2 z-10`}
          onClick={onClick}
        >
          <FaChevronLeft size={50} />
        </button>
      );
    };

    const NextArrow = (props) => {
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
      slidesToShow: 5,
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
      
      <div className = "pb-8 bg-gradient-to-r from-black bg-slate-400 text-gray-700">
      <div className="card">
          <span className="flex text-3xl sm:text-xl md:text-3xl lg:text-4xl ml-3 font-bold pb-5 pt-5 text-white">Current trends</span>
        <Slider {...settings}>
        {[1,2,3,4,5,6,7,8]. map((item,index) => {
          return (
            <div key = {index} className="px-2 ml-1 slider-card">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
       <div className="h-48">
         <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={`https://source.unsplash.com/random/400x300/?movie=${item}`} alt="" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
       <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
         <h1 className="font-dmserif text-2xl font-bold text-white">Beyond Builder</h1>
         <p className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
       </div>
     </div>
            </div>
            
          );
        })}
        </Slider>
      
        <span className="flex justify-center text-3xl sm:text-xl md:text-3xl lg:text-4xl font-bold pt-5 pb-5 text-white">Action movies</span>
        <Slider {...settings}>
        {[9,10,11,12,13,14,15,16]. map((item,index) => {
          return (
            <div key = {index} className="px-2 ml-1 slider-card">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="h-48">
         <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={`https://source.unsplash.com/random/400x300/?movie=${item}`} alt="" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
       <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
         <h1 className="font-dmserif text-2xl font-bold text-white">Beyond Builder</h1>
         <p className="mb-3 md: text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
         <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
       </div>
     </div>
            </div>
            
          );
        })}
        </Slider>

        <span className="flex justify-end text-3xl sm:text-xl md:text-3xl lg:text-4xl font-bold pt-5 pb-5 mr-5 text-white">Adventure movies</span>
        <Slider {...settings}>
        {[17,18,19,20,21,22,23,24]. map((item,index) => {
          return (
            <div key = {index} className="px-2 ml-1 slider-card">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
       <div className="h-48">
         <img className="h-full w-full object-cover transition-transform duration-500 scale-100 group-hover:scale-125" src={`https://source.unsplash.com/random/400x300/?movie=${item}`} alt="" />
       </div>
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
       <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
         <h1 className="font-dmserif text-2xl font-bold text-white">Beyond Builder</h1>
         <p className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
         <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow bg-gradient-to-r from-sky-400 to-sky-900">See More</button>
       </div>
     </div>
   </div>
            
        );
      })}
      </Slider>
    </div>
  </div>
    );
  }
}
