import newestDrop from "../data/newestDrop";
import Card from "./productCard";

function Drop() {
    return (
        <>
            <div className="flex w-full justify-center">
                <div className="flex flex-wrap px-40 gap-10 justify-between">
                    {
                        newestDrop.map((product) => (
                            <Card key={product.name} imgSrc={product.imgSrc} name={product.name} price={product.price} newArrival={product.newArrival}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Drop;