import React from 'react'
// import myImage1 from '../images/myImage1.jpg'
// import myImage2 from '../images/myImage2.jpg'
// import myImage3 from '../images/myImage3.jpg'
// import myImage4 from '../images/myImage4.jpg'
// import myImage5 from '../images/myImage5.jpg'
// import myImage6 from '../images/myImage6.jpg'

import SlideImgDiv from "./SlideImgDiv"

function Gallery() {

  //<SlideImgDiv n={5} timeoutRange={[5000,10000]} />

  return (
    <section className="overflow-hidden text-gray-700">
    <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div className="flex flex-wrap -m-1 md:-m-2">
         <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <SlideImgDiv n={5} timeoutRange={[5000,10000]} />
            </div>
      <div className="w-1/2 p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5000,10000]} />
      </div>
      <div className="w-full p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5000,10000]} />
      </div>
    </div>
    <div className="flex flex-wrap w-1/2">
      <div className="w-full p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5000,10000]} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5000,10000]} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5000,10000]} />
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Gallery;
