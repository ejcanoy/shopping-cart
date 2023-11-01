import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import "./styles/custom-fatnapz-styles.css"

function FatNapzCarousel() {

    return (
        <>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="/cover1152x540.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 xl:-translate-y-[400%] 2xl:-translate-y-[800%]  w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                                <span className="w-[200px]">Explore Fall Collection</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/storySZN960x450.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
                        <Link to="/Shop">
                            <button className="bg-white ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] h-11 font-semibold px-2" onClick={() => { console.log("Here") }}>
                            <span className="w-60">Explore Story SZN Collection</span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/cover1152x540.webp" />
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 xl:-translate-y-[400%] 2xl:-translate-y-[800%] w-11/12 p-2">
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