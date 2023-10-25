import { Outlet } from "react-router"
import Footer from "./footer"
import Navbar from "./navbar"

function About() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default About