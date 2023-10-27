import { Facebook, Instagram, Youtube, } from "react-feather"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <div className="bg-black h-[300px] grid place-items-center">
                <div className="bg-black grid grid-cols-4 gap-5 w-[80%] mx-auto">
                    <form className="text-white">
                        <h5 className="font-bold text-center mb-1">STAY IN THE LOOP</h5>
                        <div className="flex items-center space-x-1">
                            <input type="text" className="flex-grow" placeholder="Email" />
                            <button className="w-24 bg-[#cdaf8c] text-black hover:text-[#cdaf8c] hover:bg-black hover:border hover:border-1 hover:border-[#cdaf8c]">Submit</button>
                        </div>
                        <div>
                            <span className="text-xs">By clicking submit I accept all marketing emails.</span>
                        </div>
                    </form>
                    <div className="text-white text-center">
                        <h5 className="font-bold">FOLLOW SOCIALS</h5>
                        <div className="grid justify-center my-1">
                            <a
                                className="border-2 border-white rounded-full hover:border-[#cdaf8c] hover:text-[#cdaf8c]"
                                href="https://www.facebook.com/Fatnapzsociety"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Facebook className="m-1" size={18} />
                            </a>
                        </div>
                        <div className="grid justify-center my-1">
                            <a className="border-2 border-white rounded-full hover:border-[#cdaf8c] hover:text-[#cdaf8c]"
                                href="https://www.instagram.com/fatnapzsociety"
                                target="_blank"
                                rel="noreferrer">
                                <Instagram className="m-1" size={18} />
                            </a>
                        </div>
                        <div className="grid justify-center my-1">
                            <a className="border-2 border-white rounded-full hover:border-[#cdaf8c] hover:text-[#cdaf8c]"
                                href="https://www.youtube.com/user/imissZEL"
                                target="_blank"
                                rel="noreferrer">
                                <Youtube className="m-1" size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="text-white text-center">
                        <h5 className="font-bold">SHOP</h5>
                        <div>
                            <Link to="/New">
                                <h6 className="hover:text-[#cdaf8c] hover:underline">NEW</h6>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Shop">
                                <h6 className="hover:text-[#cdaf8c] hover:underline">ALL</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="text-white text-center">
                        <h5 className="font-bold">OUR STORE</h5>
                        <div>
                            <Link to="/About/OurStory">
                                <h6 className="hover:text-[#cdaf8c] hover:underline">ABOUT US</h6>
                            </Link>
                        </div>
                        <div>
                            <h6 className="hover:text-[#cdaf8c] hover:underline">FAQ</h6>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Footer