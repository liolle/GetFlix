import SlideImgDiv from "./SlideImgDiv"

function Gallery() {

  //<SlideImgDiv n={5} timeoutRange={[5000,10000]} />

  return (
    <section className="overflow-hidden text-gray-700">
    <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div className="flex flex-wrap -m-1 md:-m-2">
         <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <SlideImgDiv n={5} timeoutRange={[50,10]} />
            </div>
      <div className="w-1/2 p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5,10]} />
      </div>
      <div className="w-full p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[10,15]} />
      </div>
    </div>
    <div className="flex flex-wrap w-1/2">
      <div className="w-full p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[10,15]} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5,10]} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <SlideImgDiv n={5} timeoutRange={[5,10]} />
      </div>
    </div>
  </div>
</div>
</section>
  )
}

// export default Gallery;
