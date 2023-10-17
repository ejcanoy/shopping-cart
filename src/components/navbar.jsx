import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";
import { useState } from "react";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    return (
        <>
            <nav className="sticky z-50 top-0 flex w-full items-center bg-[#cdaf8c] drop-shadow-sm border-b-2 border-black">
                <div className="pl-5">
                    <Link to="/"><img src="/fnslogo.webp" alt="" /></Link>
                </div>
                <ul className="w-full h-[132px] flex items-center justify-center space-x-5">
                    <li className="font-bold text-lg h-full flex items-center">
                        <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/">HOME</Link>
                    </li>
                    <li className="font-bold text-lg h-full flex items-center text-center">
                        <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/new">NEW</Link>
                    </li>
                    <li className="font-bold text-lg h-full flex items-center text-center"
                        // onMouseEnter={() => setIsDropdownOpen(true)}
                        // onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                        <Link
                            className="w-[60px] hover:border-b-2 hover:border-black"
                            to="/about"
                        >
                            ABOUT
                        </Link>
                        {isDropdownOpen && (
                            <div className="absolute top-full w-full left-0 bg-[#cdaf8c] shadow-md grid grid-cols-3 transition-transform ease-in-out transform translate-y-0">
                                <div className="h-1/2">
                                    <img src="/navHolder4.jpeg" alt="" />
                                </div>
                                <ul>
                                    <li className="font-semibold text-gray-500 hover:underline">
                                        OUR STORY
                                    </li>
                                    <li className="font-semibold text-gray-500 hover:underline">
                                        CONTACT
                                    </li>
                                </ul>
                                <div className="h-1/2">
                                    <img src="/navHolder2.jpeg" alt="" />
                                </div>
                            </div>
                        )}


                    </li>
                    <li className="font-bold text-lg h-full flex items-center text-center">
                        <Link className="w-[60px] hover:border-b-2 hover:border-black" to="/shop">SHOP</Link>
                    </li>
                </ul>
                <div className="min-w-[290px] min-h-[130px] flex justify-center items-center">
                    <button>
                        <ShoppingCart />
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
