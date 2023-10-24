import PropTypes from 'prop-types';
import { useNavigate, useLocation } from "react-router-dom"

function Card({ imgSrc, name, price, newArrival }) {
    const location = useLocation();
    const paths = location.pathname.split("/");
    const prevPage = (paths.length >= 2 && paths[1] === '') ? "Home" : paths[1];
    const prevPagePathName = prevPage === "Home" ? "/" : `/${prevPage}`;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product-page/${name}`, {
            state: {
                imgSrc: imgSrc,
                name: name,
                price: price,
                newArrival: newArrival,
                prevPage: prevPagePathName,
            },
        });
    };

    return (
        <>
            <div className="transition-transform transform hover:scale-105">
                <div onClick={handleClick}>
                    <div className="">
                        <img className="h-auto w-full object-cover" src={imgSrc} alt="" />
                    </div>
                    <div>
                        {newArrival && <p className="text-[#cdaf8c]">Just In</p>}
                        <p className="font-semibold">{name}</p>
                        <p className="">${price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

Card.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    newArrival: PropTypes.bool
};

export default Card