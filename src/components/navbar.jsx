import { Link } from "react-router-dom";
import { ShoppingCart, User } from "react-feather";
import { useState } from "react";

function Navbar() {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); 
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); 

    return (
        <>
            {(isAboutDropdownOpen || isShopDropdownOpen) && (
                <div
                    className="fixed inset-0 z-40 bg-black opacity-30"
                    onClick={() => setIsAboutDropdownOpen(false)}
                ></div>
            )}
            <nav className="sticky z-50 top-0 bg-white drop-shadow-lg">
                <div className="w-[80%] mx-auto flex items-center">
                    <div className="min-w-[100px] h-[50px]">
                        <Link to="/">
                            <img src="/fnslogo.webp" className="h-[50px] object-scale-down" alt="" />
                        </Link>
                    </div>
                    <ul className="w-full h-[75px] flex items-center justify-center space-x-5">
                        <li className="font-bold text-lg h-full flex items-center">
                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/">HOME</Link>
                        </li>
                        <li className="font-bold text-lg h-full flex items-center text-center">
                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/new">NEW</Link>
                        </li>
                        <li className="font-bold text-lg h-full flex items-center text-center"
                            onMouseEnter={() => setIsAboutDropdownOpen(true)}
                            onMouseLeave={() => setIsAboutDropdownOpen(false)}
                        >
                            <Link
                                className="w-[60px] hover:border-b-2 hover:border-black"
                                to="/about"
                            >
                                ABOUT
                            </Link>
                            {isAboutDropdownOpen && (
                                <div className="absolute top-full h-[75px] w-full left-0 bg-white shadow-md grid grid-cols-1 ">
                                    <ul>
                                        <li className="font-bold text-black">
                                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/new">OUR STORY</Link>
                                        </li>
                                        <li className="font-bold text-black">
                                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/new">NEW</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="font-bold text-lg h-full flex items-center text-center"
                            onMouseEnter={() => setIsShopDropdownOpen(true)}
                            onMouseLeave={() => setIsShopDropdownOpen(false)}
                        >
                            <Link
                                className="w-[60px] hover:border-b-2 hover:border-black"
                                to="/shop"
                            >
                                SHOP
                            </Link>
                            {isShopDropdownOpen && (
                                <div className="absolute top-full h-[75px] w-full left-0 bg-white shadow-md grid grid-cols-1 ">
                                    <ul>
                                        <li className="font-bold text-black">
                                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/new">MEN</Link>
                                        </li>
                                        <li className="font-bold text-black">
                                            <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/new">WOMEN</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                    <div className="min-w-[100px] h-[75px] flex justify-center items-center">
                        <button>
                            <User />
                        </button>
                        <button>
                            <ShoppingCart />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
