function Card({ imgSrc, name, price, newArrival }) {
    return (
        <>
            <div className="transition-transform transform hover:scale-105">
                <div className=""><img className="h-auto w-full object-cover" src={imgSrc} alt="" /></div>
                <div>
                    {
                    newArrival &&
                    <p className="text-[#cdaf8c]">Just In</p>
                    }
                    <p className="font-semibold">{name}</p>
                    <p className="">{price}</p>
                </div>
            </div>
        </>
    )
}

export default Card