import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Drop from "./components/drop"

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={false}>
        <div>
          <img src="/cover1152x540.webp" />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 p-2">
            <button className="bg-[#cdaf8c] ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] rounded-lg h-11 font-semibold" onClick={() => { console.log("Here") }}>
              <p className="w-[200px]">Explore Fall Collection</p>
            </button>
          </div>
        </div>
        <div>
          <img src="/storySZN960x450.webp" />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 p-2">
            <button className="bg-[#cdaf8c] ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] rounded-lg h-11 font-semibold" onClick={() => { console.log("Here") }}>
              <p className="w-60">Explore Story SZN Collection</p>
            </button>
          </div>
        </div>
        <div>
          <img src="/cover1152x540.webp" />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 p-2">
            <button className="bg-[#cdaf8c] ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] rounded-lg h-11 font-semibold" onClick={() => { console.log("Here") }}>
              <p className="w-[200px]">Explore Fall Collection</p>
            </button>
          </div>
        </div>
      </Carousel>

      <div className="w-full h-4 bg-black"></div>
      <div className="flex w-full justify-center">
        <h2 className="text-3xl">NEWEST DROP!</h2>
      </div>
      <div className="w-full h-4 bg-black"></div>
      <Drop />

      <Footer />
    </div>
  );
};

export default App;