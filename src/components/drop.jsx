import newestDrop from "../data/inventory";
import Card from "./productCard";

function Drop() {
    return (
        <>
            <div className="w-full h-4 bg-black"></div>
            <div className="flex w-full justify-center bg-[#cdaf8c]">
                <h2 className="text-5xl 2xl:text-6xl bg-white w-[400px] 2xl:w-[600px] text-center">NEWEST DROP</h2>
            </div>
            <div className="w-full h-4 bg-black"></div>
            <div className="w-[80%] my-10 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
                    {
                        newestDrop.map((product) => (
                            <Card key={product.name} imgSrc={product.imgSrc[0]} name={product.name} price={product.price} newArrival={product.newArrival} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Drop;