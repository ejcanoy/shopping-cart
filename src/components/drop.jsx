import newestDrop from "../data/newestDrop";
import Card from "./productCard";

function Drop() {
    return (
        <>
            <div className="w-[80%] my-10 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-center">
                    {
                        newestDrop.map((product) => (
                            <Card key={product.name} imgSrc={product.imgSrc} name={product.name} price={product.price} newArrival={product.newArrival} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Drop;