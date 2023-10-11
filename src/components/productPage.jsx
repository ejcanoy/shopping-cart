import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

function ProductPage() {
    const { name } = useParams();
    return (
        <>
         <Navbar />
          <div>{name}</div>
          <Footer />
        </>
    );
}

export default ProductPage;
