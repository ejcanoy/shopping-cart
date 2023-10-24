import Footer from "./footer"
import Navbar from "./navbar"
import newestDrop from "../data/newestDrop"
import Card from "./productCard"

function New() {
    return (
        <>
            <Navbar />
            <div className="w-full h-4 bg-black"></div>
            <div className="flex w-full justify-center bg-[#cdaf8c]">
                <h2 className="text-5xl 2xl:text-6xl bg-white w-[400px] text-center">NEW</h2>
            </div>
            <div className="w-full h-4 bg-black"></div>
            <div className="w-[80%] my-10 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
                    {
                        newestDrop.map((product) => (
                            <Card key={product.name} imgSrc={product.imgSrc} name={product.name} price={product.price} newArrival={product.newArrival} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default New