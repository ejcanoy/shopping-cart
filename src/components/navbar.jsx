import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/new">New</Link>
                        <Link to="/about">About</Link>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar