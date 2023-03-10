import SlideImgDiv from "./SlideImgDiv"

const Mosaic = ()=>{

    
    return (

        
        <div className=' flex justify-center p-5'>

            <div className=' flex flex-[0_1_80%] gap-4 flex-col md:flex-row  p-5'>
                <div className=' flex md:flex-[0_1_50%] flex-col gap-4 '>
                    <div className=' flex md:h-[66%]  justify-center '>
                        <SlideImgDiv n={3} timeoutRange={[10,15]} />
                    </div>
                    <div className=' hidden md:flex md:h-[34%] gap-4 '>
                        <div className=' flex-[0_1_50%]' >
                        <SlideImgDiv n={3} timeoutRange={[5,10]} />
        
                        </div >
                        <div className=' flex-[0_1_50%]'>
                        <SlideImgDiv n={3} timeoutRange={[5,10]} />
                        </div>
                    </div>
                </div>
                <div className=' flex md:flex-[0_1_50%] flex-col gap-4'>
                    <div className=' hidden md:flex md:h-[34%] gap-4 '>
                        <div className=' flex-[0_1_50%]' >
                        <SlideImgDiv n={3} timeoutRange={[5,10]} />
        
                        </div >
                        <div className=' flex-[0_1_50%]'>
                        <SlideImgDiv n={3} timeoutRange={[5,10]} />
                        </div>
                    </div>
                    <div className=' flex md:h-[66%] justify-center '>
                        <SlideImgDiv n={3} timeoutRange={[10,15]} />
                    </div>
                </div>
            </div>

        </div>
        
        
    )
    
}

export default Mosaic;