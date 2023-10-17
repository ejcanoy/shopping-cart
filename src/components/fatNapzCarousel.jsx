import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function FatNapzCarousel() {

    return (
        <>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={false}>
                <div>
                    <img src="/cover1152x540.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 xl:-translate-y-[400%] 2xl:-translate-y-[800%]  w-11/12 p-2">
                        <button className="bg-[#cdaf8c] ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] rounded-lg h-11 font-semibold" onClick={() => { console.log("Here") }}>
                            <p className="w-[200px]">Explore Fall Collection</p>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="/storySZN960x450.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <button className="bg-[#cdaf8c] ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] rounded-lg h-11 font-semibold" onClick={() => { console.log("Here") }}>
                            <p className="w-60">Explore Story SZN Collection</p>
                        </button>
                    </div>
                </div>
                <div>
                    <img src="/cover1152x540.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <button className="bg-[#cdaf8c] ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] rounded-lg h-11 font-semibold" onClick={() => { console.log("Here") }}>
                            <p className="w-[200px]">Explore Fall Collection</p>
                        </button>
                    </div>
                </div>
            </Carousel>
        </>
    )

}

export default FatNapzCarousel