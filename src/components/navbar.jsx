import { Link, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, X, ChevronDown } from "react-feather";
import { useState } from "react";
import { useContext } from 'react';
import { ShopContext } from '../App';
import Cart from "./cart";

function Navbar() {
    const history = useNavigate();
    const { cartItems } = useContext(ShopContext);

    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isViewCartOpen, setIsViewCartOpen] = useState(false);
    const cartCount = cartItems.reduce((acc, currentProduct) => acc + currentProduct.value, 0);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isHamburgerAboutOpen, setIsHamburgerAboutOpen] = useState(false);

    const handleLinkClick = () => {
        setIsHamburgerOpen(false);
        setIsHamburgerAboutOpen(false);
    }


    return (
        <>
            {(isAboutDropdownOpen) || isViewCartOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-30"
                    onClick={() => setIsAboutDropdownOpen(false)}
                ></div>
            )}
            <div className="bg-black w-full h-5"></div>
            <nav className="sticky z-50 top-0 bg-white drop-shadow-lg">
                <div className="w-[80%] mx-auto flex items-center">
                    <div className="lg:min-w-[100px] h-[50px] md:w-[100px] xs:w-full sm:w-full sm:flex xs:justify-center xs:flex xs:pl-10 sm:justify-center xs:order-1 sm:order-1 md:order-0">
                        <Link to="/">
                            <img src="/fnslogo.webp" className="h-[50px] object-contain" alt="fns logo" />
                        </Link>
                    </div>
                    <button onClick={() => setIsHamburgerOpen(true)} className="w-[100px] sm:block md:hidden">
                        <Menu />
                    </button>
                    {
                        isHamburgerOpen &&
                        <>
                            <div className="animate-slideinOpposite fixed w-screen h-screen md:hidden sm:block xs:block bg-white left-0 top-0">
                                <button onClick={() => setIsHamburgerOpen(false)}><X color="black" /></button>
                                <ul className="text-4xl pl-2">
                                    <li className="my-4">
                                        <Link onClick={() => handleLinkClick()} to="/">HOME</Link>
                                    </li>
                                    <li className="my-4">
                                        <Link onClick={() => handleLinkClick()} to="/New">NEW</Link>
                                    </li>
                                    <li className="my-4">
                                        <span onClick={() => { setIsHamburgerAboutOpen(!isHamburgerAboutOpen) }} className="flex items-center">
                                            ABOUT
                                            <div className={`ml-2 transform transition-transform ${isHamburgerAboutOpen ? "rotate-180" : ""}`}>
                                                <ChevronDown />
                                            </div>
                                        </span>
                                        {
                                            isHamburgerAboutOpen &&
                                            <ul className="pl-4">
                                                <li>
                                                    <Link onClick={() => handleLinkClick()} to="/About/OurStory">Our Story</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => handleLinkClick()} to="/About/Contact">Contact</Link>
                                                </li>
                                            </ul>
                                        }
                                    </li>
                                    <li className="my-4">
                                        <Link onClick={() => handleLinkClick()} to="/Shop">SHOP</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                    <ul className="w-full h-[75px] flex items-center justify-center space-x-5 xs:hidden sm:hidden md:flex md:order-1">
                        <li className="font-bold text-lg h-full flex items-center">
                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/">HOME</Link>
                        </li>
                        <li className="font-bold text-lg h-full flex items-center text-center">
                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/New">NEW</Link>
                        </li>
                        <li className="font-bold text-lg h-full flex items-center text-center"
                            onMouseEnter={() => setIsAboutDropdownOpen(true)}
                            onMouseLeave={() => setIsAboutDropdownOpen(false)}
                        >
                            <Link
                                className="w-[60px] hover:border-b-2 hover:border-black"
                                to="/About/OurStory"
                            >
                                ABOUT
                            </Link>
                            {isAboutDropdownOpen && (
                                <div className="absolute top-full h-[75px] w-full left-0 bg-white shadow-md grid grid-cols-1 ">
                                    <ul>
                                        <li className="font-bold text-black">
                                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/About/OurStory">OUR STORY</Link>
                                        </li>
                                        <li className="font-bold text-black">
                                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/About/Contact">CONTACT</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="font-bold text-lg h-full flex items-center text-center"
                        >
                            <Link
                                className="w-[60px] hover:border-b-2 hover:border-black"
                                to="/Shop"
                            >
                                SHOP
                            </Link>

                        </li>
                    </ul>
                    <div className="min-w-[100px] h-[75px] flex justify-center items-center xs:order-2 sm:order-2 md:order-2">
                        <button onClick={() => setIsViewCartOpen(true)}>
                            {
                                cartItems.length > 0 &&
                                <div className="absolute rounded-full bg-black w-6 h-6 ml-5 -translate-y-2">
                                    <span className="text-white">{cartCount}</span>
                                </div>
                            }
                            <ShoppingCart size={32}></ShoppingCart>
                        </button>
                    </div>
                </div>
            </nav>

            {
                isViewCartOpen &&
                <Cart setIsViewCartOpen={setIsViewCartOpen} cartCount={cartCount} />
            }
        </>
    );
}

export default Navbar;
