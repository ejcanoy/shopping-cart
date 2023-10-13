import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather"
function Navbar() {
    return (
        <>
            <nav className="flex w-full items-center bg-[#cdaf8c]">
                <div className="pl-5">
                    <Link to="/"><img src="/fnslogo.webp" alt="" /></Link>
                </div>
                <ul className="w-full flex justify-center">
                    <li className="space-x-5">
                        <Link className="w-[50px]" to="/">HOME</Link>
                        <Link className="w-[50px]" to="/new">NEW!</Link>
                        <Link className="w-[50px]" to="/about">ABOUT</Link>
                        <Link className="w-[50px]" to="/shop">SHOP</Link>
                    </li>
                </ul>
                <div className="min-w-[290px] min-h-[130px] flex justify-center items-center">
                    <button>
                        <ShoppingCart />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar