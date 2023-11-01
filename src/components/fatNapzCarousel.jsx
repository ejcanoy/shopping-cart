import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import "./styles/custom-fatnapz-styles.css"

function FatNapzCarousel() {

    return (

        <>
            <Carousel className="xs:hidden sm:block" showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="/540test.jpeg" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:-translate-y-[100%] lg:-translate-y-[200%] xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-[200px]">Explore Fall Collection</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/test5402.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:-translate-y-[100%] lg:-translate-y-[200%] xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-[200px]">Explore All Items</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/cover1152x540.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:-translate-y-[100%] lg:-translate-y-[200%] xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-60">Explore Fall Collection</span>
                            </button>
                        </Link>
                    </div>
                </div>

            </Carousel>
            <Carousel className="xs:block sm:hidden" showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="/car2394x700.jpeg" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:-translate-y-[100%] lg:-translate-y-[200%] xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-60">Explore Fall Collection</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/car3394x700.jpeg" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:-translate-y-[100%] lg:-translate-y-[200%] xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-[200px]">Explore All Items</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/car1394x700.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-[200px]">Explore Fall Collection</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Carousel>
        </>
    )

}

export default FatNapzCarousel