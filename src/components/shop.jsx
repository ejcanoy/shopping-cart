import { Link } from "react-router-dom"
import Footer from "./footer"
import Navbar from "./navbar"

function Shop() {
    const productName = "product1";
    return (
        <>
            <Navbar />
            <Link to={`/product-page/${productName}`}>
            <button>
                Product 1
            </button>
            </Link>
            <Footer />
        </>
    )
}

export default Shop
