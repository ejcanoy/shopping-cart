import Footer from "./footer"
import Navbar from "./navbar"
import Products from "./products"
import ScrollToTop from "../functions/scrollToTop"

function New() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Products />
            <Footer />
        </>
    )
}

export default New