import { useState } from "react"
import { useLocation, Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./styles/custom-carousel-styles.css"
import newestDrop from "../data/inventory";

import { useContext } from 'react';
import { ShopContext } from '../App';


function ProductPage() {
    const { addToCart } = useContext(ShopContext);

    const location = useLocation();
    const curPathName = location.pathname;

    let imgSrc;
    let name;
    let price;
    let prevPage;
    let prevPageName
    let description

    const decodedString = decodeURIComponent(curPathName);
    const productName = decodedString.split("/")[2];
    const curProduct = newestDrop.filter(product => product.name === productName)[0];
    imgSrc = curProduct.imgSrc;
    name = curProduct.name;
    price = curProduct.price;
    prevPage = curProduct.prevPage;
    description = curProduct.description;



    const [value, setValue] = useState(1);

    const handleChange = (event) => {
        let newValue = parseInt(event.target.value, 10);
        if (/^\d+$/.test(newValue)) {
          setValue(Number(newValue));
        } else {
          setValue(5); 
        }
    

        setValue(newValue);
    };

    const [selectedSize, setSelectedSize] = useState('Small');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addToCart({ name, value, price, selectedSize, imgSrc });
    }

    return (
        <>
            <Navbar />
            <div className="flex w-full justify-center pt-12 pb-48">
                <div className="w-[80%]">
                    <div>
                        <h6><Link className="font-semibold pl-5" to={prevPage}>{prevPageName} </Link>/ {name}</h6>
                    </div>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                        <div className="product-page">
                            <Carousel showStatus={false} showThumbs={true}>
                                {
                                    imgSrc.map((img, index) => (
                                        <div key={img + index}>
                                            <img src={img} alt={`Image ${index + 1}`} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                        <div>
                            <div>
                                <h3 className="text-xl font-bold">{name}</h3>
                            </div>
                            <div>
                                <h4 className="text-lg">${price}</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <div><label className="font-semibold" htmlFor="size">Size</label></div>
                                    <div>
                                        <select
                                            className="w-24 text-center border-2 border-black"
                                            name=""
                                            id="size"
                                            value={selectedSize}
                                            onChange={handleSizeChange}
                                        >
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                            <option value="XL">XL</option>
                                            <option value="2XL">2XL</option>
                                        </select>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <div>
                                        <label className="font-semibold" htmlFor="quantity">Quantity</label>
                                    </div>
                                    <input
                                        className="w-24 text-center border-2 border-black"
                                        type="number"
                                        value={value}
                                        min={1}
                                        max={5}
                                        onChange={handleChange}
                                    />
                                </fieldset>
                                <button className="w-40 h-10 bg-[#cdaf8c] text-black  ease-in-out delay-150 duration-150 hover:bg-black hover:text-[#cdaf8c] mt-4" type="submit">Add to Cart</button>
                            </form>
                            <div className="pt-10">
                                <p className="pb-5 xl:w-3/4 2xl:w-3/4">
                                    {description}
                                </p>



                                <ul className="list-disc list-inside">
                                    <li>Shoulder-to-shoulder taping</li>
                                    <li>Preshrunk</li>
                                    <li>6 oz. 100% cotton</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductPage;